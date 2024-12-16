import React, { Component } from 'react'

class List extends Component {
    state={
        data:[
            {
                id:1,
                Name:"Aju",
                Age:35
            },
            {
                id:2,
                Name:"Kitty",
                Age:33
            },
            {
                id:3,
                Name:"Anu",
                Age:45
            }
        ]
    }
  render() {
    return (
      <div>
        <ul>
            <li className='row'><div className='col1'>Id</div><div className='col2'>Name</div><div className='col3'>Age</div> </li>
            {this.state.data.map((value, index) => {
                return <li key={index} className='row'><div className='col1'>{value.id}</div><div className='col2'>{value.Name}</div><div className='col3'>{value.Age}</div> </li>
            })}
        </ul>
      </div>
    )
}
}
export default List;
