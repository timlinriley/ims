import React from 'react'
import OrderPortal from './OrderPortal'

const Orders = (props) => {
  
        return(
        <div>
            <h1>ORDERS</h1>
                            <table>
                    <thead className="head">
                    <tr>
                        <th>Order Number</th>
                        <th>Products</th>
                        <th>Quantity</th>
                    </tr>

                    </thead>
                    <tbody>
                    {props.orders.map((element)=>{
                        return <tr>
                        <td>{element.orderNo}</td>
                        <td>{element.product}</td>
                        <td>{element.quantity}</td>
                        </tr>
})}
                    </tbody>
                    </table>

        </div>
)                    
//   return (
    
//     <div>
//         <h1>display?</h1>

//         <div>{display}</div>
//     </div>
//   )

}
export default Orders