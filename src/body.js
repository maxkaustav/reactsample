import React from 'react';

  function Name(props){
    //Since itis stateless ie no need to store data or state so it is UI component we use funtion
    const prop  = props.pass;
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
      if (element.age>25){
        return(
        <div className="element">
          <h5>{element.name}</h5>
          <hr />
          <h5>{element.age}</h5>
          <hr />
          <h5>{element.looks}</h5>
        </div>
      )
        }
    })
    return(
      <div className="listm">
        { list1 }
        { replay() }
      </div>
    )
  };



export default Name;
