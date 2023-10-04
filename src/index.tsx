import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/system';
import { grey, orange } from '@mui/material/colors';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const customTheme = createTheme({
  palette: {
    mode: 'dark',
    grey: grey[900],

    primary: {
      main: grey[900]
    }
  }
})

root.render(

  <ThemeProvider theme={customTheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
