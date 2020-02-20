import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Conversor from "./componentes/Conversor"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Conversor de moedas</h1>
        <div className="linha">
          <Conversor moedaA="USD" moedaB="BRL"></Conversor>
          <Conversor moedaA="BRL" moedaB="USD"></Conversor>
        </div>
        <div className="linha">
          <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
          <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
        </div>
      </div>

    );
  }
}

export default App;
