import React from 'react';
import './App.css';

import {FormComponent} from './components/index'
import logo from "./logo.svg";

function App() {
  return (
    <div className="Main">
      <div className="Center-icon">
        <img src={logo} className="App-logo" alt="logo"/>
      </div>
      <FormComponent/>
    </div>
  );
}

export default App;
