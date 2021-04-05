import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, AreaChart, linearGradient, CartesianGrid, Tooltip, Area } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
];

const data2 = [
  {
    "name": "Dia 01",
    "certo": 40,
    "errado": 24,
    "amt": 2400
  },
  {
    "name": "Dia 02",
    "certo": 36,
    "errado": 15,
    "amt": 2210
  },
  {
    "name": "Dia 03",
    "certo": 50,
    "errado": 18,
    "amt": 2290
  },
  {
    "name": "Dia 04",
    "certo": 41,
    "errado": 19,
    "amt": 2000
  },
  {
    "name": "Dia 05",
    "certo": 52,
    "errado": 22,
    "amt": 2181
  },
  {
    "name": "Dia 06",
    "certo": 39,
    "errado": 9,
    "amt": 2500
  },
  {
    "name": "Dia 07",
    "certo": 24,
    "errado": 3,
    "amt": 2100
  }
]

const data1 = [
  createData('01:00', 10),
  createData('02:00', 30),
  createData('04:00', 50),
  createData('07:00', 80),
  createData('10:00', 150),
  createData('11:00', 200),
  createData('13:00', 270),
  createData('15:00', 310),
  createData('17:00', undefined),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Estatística</Title>
      <ResponsiveContainer>
        {/* <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart> */}
        <AreaChart width={730} height={250} data={data2}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#880000" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#700000" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="certo" stroke="#333" fillOpacity={1} fill="url(#colorUv)" />
          <Area type="monotone" dataKey="errado" stroke="#333" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>  
      </ResponsiveContainer>
    </React.Fragment>
  );
}