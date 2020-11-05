import React from 'react';

class Name extends React.Component 
{
	state ={
		name: "kaustav",
		age: "40",
		looks: "30"
	};
  render(){
    return(
      <div>
        <h5>{this.state.name}</h5>
        <hr />
        <h5>{this.state.age}</h5>
        <hr />
        <h5>{this.state.looks}</h5>
      </div>
      )
  };

}

export default Name;
