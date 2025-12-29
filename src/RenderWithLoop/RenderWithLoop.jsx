import React, { Component } from 'react'
import BlackCar from '../assets/images/black-car.png'
import BlueCar from '../assets/images/blue-car.png'
import GrayCar from '../assets/images/gray-car.png'
import WhiteCar from '../assets/images/white-car.png'

export default class RenderWithLoop extends Component {
    productList = [
        {id:1, name:'Black Car', price:1000, img:BlackCar},
        {id:2, name:'White Car', price:2000, img:WhiteCar},
        {id:3, name:'Blue Car', price:3000, img:BlueCar},
        {id:4, name:'Gray Car', price:3000, img:GrayCar}
    ]

    renderTable = () => {
        //Render with loop
        // let contentTable = [];
        // for(let i=0; i < this.productList.length; i++){
        //     let product = this.productList[i];
        //     let row = <tr key={product.id}>
        //         <td>{product.id}</td>
        //         <td>{product.name}</td>
        //         <td>{product.price}</td>
        //         <td>
        //             <img style={{ width: '100px' }} src={product.img} alt="" />
        //         </td>
        //         <td><button className='btn btn-primary'>Buy now</button></td>
        //     </tr>
        //     contentTable.push(row);
        // }

        //Render with map
        let contentTable = this.productList.map((product, index) => {
            return <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <img style={{ width: '100px' }} src={product.img} alt="" />
                </td>
                <td><button className='btn btn-primary'>Buy now</button></td>
            </tr>
        });

        return contentTable;
    }
  render() {
    return (
      <div className='container'>
        <table className="table">
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>price</th>
                    <th>img</th>
                    <th>edit</th>
                </tr>
            </thead>
            <tbody>
                {this.renderTable()}
            </tbody>
        </table>

      </div>
    )
  }
}
