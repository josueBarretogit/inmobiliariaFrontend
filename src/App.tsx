import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Typography, Rating, Badge } from '@mui/material';
import { MailSharp } from '@mui/icons-material';

function App() {

  const [value, setValue] = React.useState<number | null>(4);

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Badge badgeContent={4} color="secondary">
          <MailSharp />
        </Badge>
        <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
        <Typography component="legend">Disabled</Typography>
        <Rating name="disabled" value={value} disabled />
        <Typography component="legend">No rating given</Typography>
        <Rating name="no-value" value={null} />
      </header>
    </div>
  );
}

export default App;
