import React, { Component } from 'react'

export default class HandleEvent extends Component {
    //Method handle event
    handleClick = () => {
        alert('Hello everyone')
    }

  render() {
    return (
      <>
        {/* Function Trực tiếp  */}
        <button onClick={() => {alert('Hello everyone')}}>Click me</button>
        {/* Gọi hàm thông qua method của class */}
        <button onClick={this.handleClick}>Click me</button>
      </>
    )
  }
}
