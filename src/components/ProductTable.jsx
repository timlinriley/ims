import React from 'react'

const ProductTable = (props) => {
    // console.log(props.products)
    const display = props.products.products.map((element) => {
        return(
            <div>
            <h4>Image</h4>
                <img src={element.thumbnail} />
            <h4>Description</h4>
                <p>{element.description}</p>
            <h4>Quantity</h4>
                <p>{element.stock}</p>
            <h4>Category</h4>
                <p>{element.category}</p>
            <h4>Price</h4>
                <p>${element.price}</p>
            <h4></h4>
            </div>
        )
    })

  return (
    <div>
        <h1>ProductTable</h1>
        {display}
        
    </div>
  )
}

export default ProductTable