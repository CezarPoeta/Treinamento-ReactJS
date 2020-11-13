import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { todos } from './todos.json';

class App extends Component {

  constructor() {
    super();
    this.state = {
      title: 'Aplicação de tarefas',
      ntareas: 10
    }
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">
            {this.state.title} - {this.state.ntareas}
          </a>
        </nav>
        <img src={logo} className="App-logo" alt="logo" />
      </div>

    )
  }
}

export default App;
