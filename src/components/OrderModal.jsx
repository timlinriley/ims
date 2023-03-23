import React from 'react'

const OrderModal = (props,{onClose}) => {
    const products = props.products;
    console.log(products)
  return (
    <div>
        
        <input type="text" placeholder='Order #'></input>
        <input type="text" placeholder='Product'></input>
        <input type="text" placeholder='quantity'></input>
        <button >Submit Order</button>
        <button onClick={onClose}>Close</button>    
    </div>
  )
}

export default OrderModal