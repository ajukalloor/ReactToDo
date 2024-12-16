import React, { Component } from 'react'

class UncontrolledComponents extends Component {
    constructor(props){
        super(props);
        this.inputOne=React.createRef();
        this.inputTwo=React.createRef();

    }

    textSubmit=(e)=>{
        console.log(this.inputOne.value);
        console.log(this.inputTwo.value);
    }
  render() { 
    return (
      <div>
        <h2>Uncontrolled argument</h2>
        <form> 
            <input name='firstName' type='text' onChange={this.textChange} ref={input=>(this.inputOne=input)} />
            <input name='lastName' type='text' onChange={this.textChange} ref={input=>(this.inputTwo=input)} />
            <button type='button' onClick={this.textSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}
export default UncontrolledComponents
