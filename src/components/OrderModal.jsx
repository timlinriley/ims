import React from 'react'

const OrderModal = ({onClose}) => {
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