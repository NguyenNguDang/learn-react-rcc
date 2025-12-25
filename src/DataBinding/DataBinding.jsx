import React, { Component } from 'react'

export default class DataBinding extends Component {
    //attribute of clas
     name = "Nguyen Ngu Dang";

     //component, method must be return JSX or Content(string, number, boolean)
     renderName = () => {
        return <h1>Nguyen Ngu Dang</h1>
     }

  render() {
    //scope trong hàm render
    const age = 18;
    return (
      <div>
        <h1>{this.name}</h1>
        <h1>{this.renderName()}</h1>
        <h2>{age}</h2>
      </div>
    )
  }
}
