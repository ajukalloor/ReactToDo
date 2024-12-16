import React, { Component } from 'react'

class popupbox extends Component {
    constructor(props){
        super(props)
        this.closeBox=this.closeBox.bind(this);
    }
    closeBox(){
        console.log("Clicked");
    }
  render() {
    return (
      <div className='box'>
        <span onClick={this.closeBox}  className='popbox_close'>X</span>
        Hello box

      </div>
    )
  }
}
export default popupbox
