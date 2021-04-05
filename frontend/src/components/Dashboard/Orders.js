import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '01 Jan, 2019', 'Português', 'FGV', 'VISA ⠀•••• 3719', 'CERTO'),
  createData(1, '02 Jan, 2019', 'Matemática', 'QUADRIX', 'VISA ⠀•••• 2574', 'ERRADO'),
  createData(2, '13 Fev, 2019', 'Direito Penal', 'FCC', 'MC ⠀•••• 1253', 'CERTO'),
  createData(3, '22 Fev, 2019', 'Física', 'Vunesp', 'AMEX ⠀•••• 2000', 'CERTO'),
  createData(4, '14 Mar, 2019', 'Contabilidade', 'CEBRASPE/CESPE', 'VISA ⠀•••• 5919', 'CERTO'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Questões Recentes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Disciplina</TableCell>
            <TableCell>Banca</TableCell>
            <TableCell align="right">Resultado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}