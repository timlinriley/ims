import React from 'react'
import OrderPortal from './OrderPortal'

const Orders = (props) => {
  
        return(
        <div>
            <h1>ORDERS</h1>
                            <table className="table">
                    <thead className="head">
                    <tr>
                        <th>Order Number</th>
                        <th>Products</th>
                        <th>Quantity</th>
                    </tr>

                    </thead>
                    <tbody>
                        {/* Map over orders array to display as data in table */}
                    {props.orders.map((element)=>{
                        return <tr className="trow">
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