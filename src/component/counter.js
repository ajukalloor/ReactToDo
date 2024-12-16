import React, { Component } from 'react'
 
class Counter extends Component {
    state = {
        count:0
    }
    onIncrement=()=>{
        this.setState({
            count:this.state.count+1
        })
        
    }
    OnDecrement=()=>{
        this.setState({
            count:this.state.count-1
        })
    }
    render() {
        return(
            <div>
                <h1> Counter Com ponent</h1>
                <h2>{this.state.count}</h2>
                <button type='button' onClick={this.OnDecrement}>-</button>
                <button type='button' onClick={this.onIncrement}>+</button>
            </div>
        )
    }
}
export default Counter