import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import RegisterComponent from './components/RegisterComponent';
import AllUsers from './components/AllUsers';

function App() {

  const [id, setId] = useState(1);

  return (

    <h1></h1>

    <>
      <RegisterComponent />
      <AllUsers id={id} key = {123} name = "bname"/>
    </>
  );
}

export default App;
