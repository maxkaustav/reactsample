import logo from './logo.svg';
import './App.css';
import React from 'react';
import Name from './body.js';

class App extends React.Component 
{ state= {
    ar : [
      { name : "Yalu", age: "25", looks: "26" },
      { name : "Yalu2", age: "27", looks: "26" },
      { name : "Yalu3", age: "36", looks: "40" },
    ]
  };
  render(){
    const sr1=[1,2,3,4]
    return(
      <div>
        <h1>My App</h1>
        <Name pass={this.state.ar}></Name>
      </div>
      )
  };

}

export default App;
