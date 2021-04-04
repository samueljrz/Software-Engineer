import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
//import axios from 'axios';

import './styles.css'

function Question() { 

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
          <div className="container-question"> 
            <div className="container-content">
              <div className="questionid">questao id </div>
              <div> disciplina </div>
            </div>
            <div className="container-info">
              <span>Ano: 2020</span>
              <span>Banca: CESPE</span>
              <span>Nivel: Superior</span>
              <span>Instituição: Policia Federal</span>
            </div>
            <div className="line"></div>
            <div className="container-proof">
              <div>“Trata-se de um crédito adicional destinado a suprir despesas urgentes e imprevistas, não dependem de fonte de recursos e independem de autorização legislativa, devendo ser abertos por Medida Provisória (União) ou Decreto do Poder Executivo (Estados e Municípios) que devem dar imediata ciência ao Poder Legislativo.” As informações correspondem a crédito:</div>
                <form onSubmit={handleSubmit}>
                  <FormControl component="fieldset" error={error} className={classes.formControl}>
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
        </div>
        <div className="container-main">
          <div className="container-question"> 
            <div className="container-content">
              <div className="questionid">questao id </div>
              <div> disciplina </div>
            </div>
            <div className="container-info">
              <span>Ano: 2020</span>
              <span>Banca: CESPE</span>
              <span>Nivel: Superior</span>
              <span>Instituição: Policia Federal</span>
            </div>
            <div className="line"></div>
            <div className="container-proof">
              <div>“Trata-se de um crédito adicional destinado a suprir despesas urgentes e imprevistas, não dependem de fonte de recursos e independem de autorização legislativa, devendo ser abertos por Medida Provisória (União) ou Decreto do Poder Executivo (Estados e Municípios) que devem dar imediata ciência ao Poder Legislativo.” As informações correspondem a crédito:</div>
              <div>assertivas</div>
              <div>button</div>
            </div>
          </div>
        </div>
        <div className="container-main">
          <div className="container-question"> 
            <div className="container-content">
              <div className="questionid">questao id </div>
              <div> disciplina </div>
            </div>
            <div className="container-info">
              <span>Ano: 2020</span>
              <span>Banca: CESPE</span>
              <span>Nivel: Superior</span>
              <span>Instituição: Policia Federal</span>
            </div>
            <div className="line"></div>
            <div className="container-proof">
              <div>“Trata-se de um crédito adicional destinado a suprir despesas urgentes e imprevistas, não dependem de fonte de recursos e independem de autorização legislativa, devendo ser abertos por Medida Provisória (União) ou Decreto do Poder Executivo (Estados e Municípios) que devem dar imediata ciência ao Poder Legislativo.” As informações correspondem a crédito:</div>
              <div>assertivas</div>
              <div>button</div>
            </div>
          </div>
        </div>
        <div className="container-main">
          <div className="container-question"> 
            <div className="container-content">
              <div className="questionid">questao id </div>
              <div> disciplina </div>
            </div>
            <div className="container-info">
              <span>Ano: 2020</span>
              <span>Banca: CESPE</span>
              <span>Nivel: Superior</span>
              <span>Instituição: Policia Federal</span>
            </div>
            <div className="line"></div>
            <div className="container-proof">
              <div>“Trata-se de um crédito adicional destinado a suprir despesas urgentes e imprevistas, não dependem de fonte de recursos e independem de autorização legislativa, devendo ser abertos por Medida Provisória (União) ou Decreto do Poder Executivo (Estados e Municípios) que devem dar imediata ciência ao Poder Legislativo.” As informações correspondem a crédito:</div>
              <div>assertivas</div>
              <div>button</div>
            </div>
          </div>
        </div>
        <div className="container-main">
          <div className="container-question"> 
            <div className="container-content">
              <div className="questionid">questao id </div>
              <div> disciplina </div>
            </div>
            <div className="container-info">
              <span>Ano: 2020</span>
              <span>Banca: CESPE</span>
              <span>Nivel: Superior</span>
              <span>Instituição: Policia Federal</span>
            </div>
            <div className="line"></div>
            <div className="container-proof">
              <div>“Trata-se de um crédito adicional destinado a suprir despesas urgentes e imprevistas, não dependem de fonte de recursos e independem de autorização legislativa, devendo ser abertos por Medida Provisória (União) ou Decreto do Poder Executivo (Estados e Municípios) que devem dar imediata ciência ao Poder Legislativo.” As informações correspondem a crédito:</div>
              <div>assertivas</div>
              <div>button</div>
            </div>
          </div>
        </div>
      </div>
		);
}

export default Question;