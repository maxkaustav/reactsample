import logo from './logo.svg';
import './App.css';
import React from 'react';
import Name from './body.js';
import Db from './inputar.js';

class App extends React.Component 
{ state= {
    ar : [
      { name : "Yalu", age: "25", looks: "26" , id: 1},
      { name : "Yalu2", age: "27", looks: "26" , id: 2},
      { name : "Yalu3", age: "36", looks: "40" ,id: 3},
    ]
  };
  getupdate = (data) =>{
    let a=this.state.ar
    a.push(data)
    //console.log(a)
    this.setState({
      ar: a
    })
  };
  getdelete = (id) =>{
    let ary = this.state.ar.filter((n) =>{
      return n.id !== id
    })
    this.setState({
      ar: ary
    })
  };
  render(){
    return(
      <div>
        <h1>My App</h1>
        <Name pass={this.state.ar} del={this.getdelete}></Name>
        <Db update={this.getupdate}/>
      </div>
      )
  };

}

export default App;
