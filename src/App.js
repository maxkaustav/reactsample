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
        <Name></Name>
      </div>
      )
  };

}

export default App;
