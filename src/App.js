import React from 'react';
import logo from './logo.svg';
import './App.css';

import LambdaDemo from './LambdaDemo';
import GraphQLDemo from './GraphQLDemo';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <LambdaDemo />
        <GraphQLDemo />
      </header>
    </div>
  );
};

export default App;
