import React, { Component } from 'react'

export default class Forms extends Component {
    state={
        firstName:""
    }
    textChange=(event)=>{
        console.log(event.target.value);
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    valueSubmit=()=>{
        console.log("first Name = " + this.state.firstName)
        console.log("last Name = " + this.state.lastName)
    }
  render() {
    return (
      <div>
        <form>
        <input name='firstName' onChange={this.textChange} value={this.state.firstName} />
        <input name='lastName' onChange={this.textChange} value={this.state.lastName} />
        <button type='button' onClick={this.valueSubmit}>Submit</button>
        </form>

      </div>
    )
  }
}
