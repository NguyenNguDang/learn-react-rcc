import React, { Component } from 'react'

export default class RenderConditions extends Component {
    login = true;
    username = "Nguyen Ngu Dang";

  render() {
    return (
      <div>
        {this.login ? <p>Hello {this.username}</p>: <button>Login</button>}
      </div>
    )
  }
}
