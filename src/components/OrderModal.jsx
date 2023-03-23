import React from 'react'
import { useState } from 'react';

const OrderModal = (props,{onClose}) => {
    const products = props.products;
    const emptyOrder = {
        orderNo: '',
        product: '',
        quantity: '',

    };
    const [order, setOrder] = useState(emptyOrder);
    console.log(products)
    const handleSubmit = () => {

    }
  return (
    <div>
        
        <input type="text" placeholder='Order #' value={order.orderNo}></input>
        <input type="text" placeholder='Product' value={order.product}></input>
        <input type="text" placeholder='quantity' value={order.quantity}></input>
        <button >Submit Order</button>
        <button onClick={onClose}>Close</button>    
    </div>
  )
}

export default OrderModal