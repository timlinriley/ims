import React, { useEffect } from 'react'
import { useState } from 'react';

const OrderModal = (props,{onClose}) => {
    const products = props.products;
    const productOptions = [
        {
        label:'',
        value:'',
    }
];

// document.querySelector('.css-b62m3t-container')?.addEventListener('click', (e) => {handleChange(e) } )
    const [options, setOptions] = useState(productOptions)
    // const productOptions = products.map((element) =>{
    //     return element.title;
    // })
    const handleOptions = () => {
      setOptions(products.map((element) => {
     return {label: element.title, value: element.title}
    }))
    }
    useEffect(() => {
        handleOptions();
    }, [])
    const emptyOrder = {
        orderNo: '',
        product: '',
        quantity: '',

    };
    const [order, setOrder] = useState(emptyOrder);
    const [orders, setOrders] = useState([])
    const [select, setSelect] =useState();
    console.log(products)
    const handleChange = (e) => {
        const {name, value} = e.target;
        // const name = e.target.textContent
        setOrder({...order, [name]: value,})
        // setSelect(e.target.value)
        // console.log(name, value)
    }
    const addArray = (order) => {
        orders.push(order)
        setOrders(orders);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
         console.log(order)
        addArray(order)
        props.updateOrderArray(orders)
        console.log(orders, '*')
        // console.log(order)
    }

  return (
    <div className="modal-container">
        <form onSubmit={handleSubmit}>
            <div className="modal-content">
                <h5 className="create">Create Order</h5>
        <input className="modord" type="text" placeholder='Order #' value={order.orderNo} onChange={handleChange} name="orderNo"></input>
        <select className="modsel"value={select} name="product" onChange={handleChange} >
            {products.map((element)=> {
                return (<option name="product" >{element.title}</option> 
                    )
            })}
        </select>
        {/* <Select name="product" value={options.value} options={options}  /> */}
        <input className="modquant" type="text" placeholder='quantity' value={order.quantity} onChange={handleChange} name="quantity"></input>
        <input className="modsub" type="submit" value="Submit" />
        <button onClick={onClose}>Close</button>
        </div>
        </form>  
    </div>
  )
}

export default OrderModal