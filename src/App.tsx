import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainAppBar from './components/appBar';
import { Typography, Rating, Badge } from '@mui/material';
import { MailSharp } from '@mui/icons-material';

function App() {

  const [value, setValue] = React.useState<number | null>(4);

  return (

    <div >

      <MainAppBar />

    </div>
  );
}

export default App;
