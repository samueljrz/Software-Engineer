import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
    justifyContent: "center",
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <div className={classes.depositContext}>
      <Title>Questões Realizadas</Title>
      <Typography component="p" variant="h4">
        105
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver todas
        </Link>
      </div>
    </div>
  );
}