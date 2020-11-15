import logo from './logo.svg';
import './App.css';
import React from 'react';
import Name from './body.js';

class App extends React.Component 
{
  render(){
    return(
      <div>
        <h1>My App</h1>
        <Name name="Yalu" age="25" looks="26"></Name>
      </div>
      )
  };

}

export default App;
