import React, { Component } from 'react'
import './Styling.css'
import Child from './Child'
import styles from './Styling.module.css'

export default class Styling extends Component {
  render() {
    const styleText = {
        color: 'red',
        fontSize: '30px',
        backgroundColor: 'black'
    }

    return (
      <div>
        <p className='text'>Hello Đăng!</p>
        <Child />
        <p className={styles.txtStyle}> Module</p>
        <p style={styleText}> Inline Style</p>
      </div>
    )
  }
}
