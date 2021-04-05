import React from 'react'
import {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import axios from 'axios';

import './styles.css'

function Question() { 
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
      axios
        .get('http://localhost:3333/question')
        .then((response) => {
          setQuestions(response.data);
        })
        .catch((error) => {				
          console.log('error');
        });
    }, [])

    const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(3),
    },
    button: {
      margin: theme.spacing(1, 1, 0, 0),
    },
    }));
  
      const classes = useStyles();
      const [value, setValue] = React.useState('');
      const [error, setError] = React.useState(false);
      const [helperText, setHelperText] = React.useState('Choose wisely');

      const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText(' ');
        setError(false);
      };

    function handleSubmit(event)  {
      event.preventDefault();

      if (value === 'best') {
        setHelperText('Você acertou');
        setError(false);
      } else if (value === 'worst') {
        setHelperText('Você errou');
        setError(true);
      } else {
        setHelperText('Por favor seleciona uma opção');
        setError(true);
      }
    };

		return (
      <div className="main">
        <div className="container-main">
          {questions.map((question, index) => (
            <div className="container-question"> 
            <div className="container-content">
              <div className="questionid">{question.id}</div>
            </div>
            <div className="container-info">
                <ul className="container-info-list">
                  <li key="1"><span>Disciplina: {question.disciplina}</span></li>
                  <li key="2"><span>Banca: {question.banca}</span></li>
                  <li key="3"><span>Instituição: {question.instituicao}</span></li>
                  <li key="4"><span>Ano: {question.ano}</span></li>
                </ul>
            </div>
            <div className="line"></div>
            <div className="container-proof">
              <div>"{question.conteudo}"</div>
                <form onSubmit={handleSubmit}>
                  <FormControl component="fieldset" className={classes.formControl}>
                    <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
                      <FormControlLabel value="best" control={<Radio />} label="Certo" />
                      <FormControlLabel value="worst" control={<Radio />} label="Errado" />
                    </RadioGroup>
                    <FormHelperText>{helperText}</FormHelperText>
                    <Button type="submit" variant="outlined" color="primary" className={classes.button}>
                      Check Answer
                    </Button>
                  </FormControl>
                </form>
            </div>
          </div>
          ))}
        </div>
      </div>
		);
}

export default Question;