import React from 'react'
import OrderPortal from './OrderPortal'

const Orders = (props) => {
    const display = props.orders.map((element)=>{
        return(
        <div>
                            <table>
                    <thead className="head">
                    <tr>
                        <th>Order Number</th>
                        <th>Products</th>
                        <th>Quantity</th>
                    </tr>

                    </thead>
                    <tbody>
                        <td>{element.orderNo}</td>
                        <td>{element.product}</td>
                        <td>{element.quantity}</td>
                    </tbody>
                    </table>
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