import React from 'react'
import FormDesc from '../FormDesc'

const ProductTable = (props) => {
    // console.log(props.products)
        return(
            <div>
                        <h1>ProductTable</h1>
                <table>
                    <thead className="head">
                    <tr>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Category</th>
                        <th>Brand</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td><FormDesc products={props.products.products}/></td>
                    </tr>
                    </thead>
                    <tbody>
                { props.products.products.map((element) => {
                    return <tr >
                        <td className="tdata"><img className="tdataimg" src={element.thumbnail} /></td>
                        <td className="tdatadesc" >{element.description}</td>
                        <td className="tdata">{element.stock}</td>
                        <td className="tdata">{element.category}</td>
                        <td className="tdata">{element.brand}</td>
                        <td className="tdata">{element.price}</td>
                    </tr>
                     
                    })
                    }
                    </tbody>
                </table>
            </div>
            // <div>
            // <h4>Image</h4>
            //     <img src={element.thumbnail} />
            // <h4>Description</h4>
            //     <p>{element.description}</p>
            // <h4>Quantity</h4>
            //     <p>{element.stock}</p>
            // <h4>Category</h4>
            //     <p>{element.category}</p>
            // <h4>Price</h4>
            //     <p>${element.price}</p>
            // <h4></h4>
            // </div>
        )
   

//   return (
//     <div>
//         <h1>ProductTable</h1>
        
        
//     </div>
//   )
}

export default ProductTable