import React, { Component } from 'react'
import styles from "../Ex3/ProductItem.module.css"
export default class ProductItem extends Component {
  render() {
    const {  name, price, image } = this.props.item;
    return (
      <div>
        <div style={{position:"relative"}} className={styles.item} >
          <img className={styles.img} src={image} alt="" />
          <h3>Name : {name}</h3>
          <p>Price : {price}</p>
          <button onClick={()=> 
            this.props.addToCart(this.props.item)}
             className={styles.btn} >Add to Cart</button>
          <br/>
       
          <button onClick={()=>{
            this.props.setSelectedItem(this.props.item);
          }} className={styles.btn} > Detail</button>


        </div>
      </div>
    )
  }
}
