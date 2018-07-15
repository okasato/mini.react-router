import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './App.jsx';

// const theme = createMuiTheme();

// function Root() {
//   return (
//     <MuiThemeProvider theme={theme}>
//       <App />
//     </MuiThemeProvider>
//   );
// }

ReactDOM.render(
  <BrowserRouter>
    <Route path='/' component={App}/>
  </BrowserRouter>, 
  document.getElementById('root'));