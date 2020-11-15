import React from 'react';

class Name extends React.Component 
{
	state ={
		name: "kaustav",
		age: "40",
		looks: "30"
  };
  render(){
    const prop  = this.props.pass;
    //console.log(typeof pass.ar)
    function replay(){
      var data = <h3>Hi</h3>
      var datatotal=[]
      for(var i=0;i<5;i++){
        datatotal.push(data)
      };
      return(
        datatotal
      )
    }
    const list1 = prop.map( (element) => {
      return(
        <div className="element">
          <h5>{element.name}</h5>
          <hr />
          <h5>{element.age}</h5>
          <hr />
          <h5>{element.looks}</h5>
        </div>
      )
    })
    return(
      <div className="listm">
        { list1 }
        { replay() }
      </div>
    )
  };

}

export default Name;
