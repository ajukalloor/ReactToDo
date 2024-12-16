import React, { Component } from 'react'

export default class Todo extends Component {
    state = {
        input:"",
        itemList:[]
    }
    handleChange = event =>{
        const {input}=this.state
        this.setState({
            input:event.target.value
        });
        console.log(input)
    }

    storeValue=(event)=>{
        event.preventDefault();
        const {input,itemList}=this.state; 
        // const allItems=itemList;
        // allItems.push(input);
        this.setState({
            itemList:[...itemList,input],
            input:""
        })
        console.log(itemList);
    }
    deleteItem=(key)=>{
        // const allItems=this.state.itemList;
        // allItems.splice(key,1)
        this.setState({
            itemList:this.state.itemList.filter((data,index)=>{return key!==index}) 
        })
    }

  render() {

    const{input,itemList}=this.state;
    return (
      <div className='todo_wrap app'>

            <div className="mainHeading">
                <h1>ToDo List</h1>
            </div>
            <div className="subHeading">
                <br />
                <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
            </div>
            <form onSubmit={this.storeValue}>
                <div className="input">
                    <input  value={input} onChange={this.handleChange} type="text" placeholder="🖊️ Add item..." />
                    <i className="fas fa-plus" ></i>
                </div>
            </form>

            <div className="todos">
                {itemList.map((data, index)=>(
                    <div className="todo" key={index}>
                        <div className="left"><p >{data}</p></div>
                        <div className="right">
                            <i onClick={()=>{this.deleteItem(index)}} className="fas fa-times"></i>
                        </div>
                    </div>
       
                ))}
                
                    
            </div>
      </div>
    )
  }
}
