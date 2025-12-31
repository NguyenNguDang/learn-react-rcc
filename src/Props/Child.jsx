import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <div>
        <img style={{width: '550px'}} src={this.props.propSource} alt="" />
      </div>
    )
  }
}
