import React, { Component } from 'react'
import BlackCar from '../assets/images/black-car.png'
import BlueCar from '../assets/images/blue-car.png'
import GrayCar from '../assets/images/gray-car.png'
import WhiteCar from '../assets/images/white-car.png'
import './SelectCar.css'

export default class SelectCar extends Component {
    BlackCar = BlackCar
    WhiteCar = WhiteCar
    BlueCar = BlueCar
    GrayCar = GrayCar
    state = {
        imgSrc: BlackCar
    }

    onChangeColor = (img) => {
        const newState = {
            imgSrc: img
        }
         this.setState(newState)
    }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
            <div className='col-8'>
                <div className="img-container">
                    <img src={this.state.imgSrc} alt="" />
                </div>
            </div>
            <div className='col-4'>
                <div className='button-container'>
                <div className="row button-item" onClick={()=> {this.onChangeColor(this.BlackCar)}}>
                    <button>Black</button>
                </div>
                <div className="row button-item" onClick={()=> {this.onChangeColor(this.WhiteCar)}}>
                    <button>White</button>
                </div>
                <div className="row button-item" onClick={()=> {this.onChangeColor(this.BlueCar)}}>
                    <button>Blue</button>
                </div>
                <div className="row button-item" onClick={()=> {this.onChangeColor(this.GrayCar)}}>
                    <button>Gray</button>
                </div>
                </div>
            
            </div>
        </div>

      </div>
    )
  }
}
