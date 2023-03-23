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
    const [orders, setOrders] = useState([])
    console.log(products)
    const handleChange = (e) => {
        const {name, value} = e.target;
        setOrder({...order, [name]: value,})
        console.log(order)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setOrders(order)
        console.log(orders, '*')
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Order #' value={order.orderNo} onChange={handleChange} name="orderNo"></input>
        <input type="text" placeholder='Product' value={order.product} onChange={handleChange} name="product"></input>
        <input type="text" placeholder='quantity' value={order.quantity} onChange={handleChange} name="quantity"></input>
        <input type="submit" value="submit" />
        <button onClick={onClose}>Close</button>  
        </form>  
    </div>
  )
}

export default OrderModal