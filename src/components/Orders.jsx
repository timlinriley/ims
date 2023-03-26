import React from 'react'

const Orders = (props) => {
    const display = props.orders.map((element)=>{
        return(
        <div>
        <p>{element.orderNo}</p>
        <p>{element.product}</p>
        <p>{element.quantity}</p>
        </div>
    )})
  return (
    
    <div>
        <h1>display?</h1>
        <div>{display}</div>
    </div>
  )
}

export default Orders