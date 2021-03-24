import React from 'react';

import Routes from './routes';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#F58072',
			main: '#DB7267',
			dark: '#B86157',
			contrastText: '#fff'
		}
	}
});


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Routes />
    </MuiThemeProvider>
  );
}

export default App;