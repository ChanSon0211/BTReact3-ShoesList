import React, { Component } from 'react'

export default class ProductDetail extends Component {
  render() {
    const {name, image ,price ,description , quantity} = this.props.item;
    return (
      <div style={{border:"1px solid red",position:"absolute" , padding:30}}>
        <h4>Tên Sản Phẩm:{name}</h4>
        <img src={image} alt=""/>
        <h2>Giá: {price}</h2>
        <h4>Mô Tả:{description}</h4>
        <h4>Số Lượng {quantity}</h4>
      </div>
    )
  }
}
