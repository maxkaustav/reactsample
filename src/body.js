import React from 'react';

class Name extends React.Component 
{
	state ={
		name: "kaustav",
		age: "40",
		looks: "30"
  };
  prop = this.props;

  render(){
    return(
      <div>
        <h5>{this.state.name}</h5>
        <hr />
        <h5>{this.state.age}</h5>
        <hr />
        <h5>{this.state.looks}</h5>
        <h5>{this.prop.name}</h5>
        <hr />
        <h5>{this.prop.age}</h5>
        <hr />
        <h5>{this.prop.looks}</h5>
      </div>
      )
  };

}

export default Name;
