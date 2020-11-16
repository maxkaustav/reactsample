import React from 'react';

class DB extends React.Component{
    state={
        name: "",
        age: "",
        looks: ""
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    };
    handleSubmit =(e) =>{
        e.preventDefault()
        this.props.update(this.state)
    };
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                        <input type="text" id ="name" onChange={this.handleChange} value={this.state.name}></input>
                    <label htmlFor="name">Age:</label>
                        <input type="text" id ="age" onChange={this.handleChange} value={this.state.age}></input>
                    <label htmlFor="name">Looks like:</label>
                        <input type="text" id ="looks" onChange={this.handleChange} value={this.state.looks}></input>
                    <button>Submit</button>
                </form>
            </div>
        )
        };
}

export default DB