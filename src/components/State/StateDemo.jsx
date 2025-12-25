import React, { Component } from 'react'

export default class StateDemo extends Component {
    //attribute có sẵn của class Component
    state = {
         status: false
    }; 

    userLogin = {
        username: "Nguyen Ngu Dang",
        age: 18
    };

    login = () => {
        let newState = {
            status: true
        }
        this.setState(newState, () => {console.log(this.state.status)});
        
    }

    renderUserLogin = () => {
        if(this.state.status) {
            return <div>{this.userLogin.username}</div>
        }else{
            return <button onClick={() => {
                this.login()
            }}>Login</button>
        }
    }

  render() {
    return (
      <div>
        {this.renderUserLogin()}
      </div>
    )
  }
}
