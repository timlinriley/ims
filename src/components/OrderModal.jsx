import React, { useEffect } from 'react'
import { useState } from 'react';
import Select from 'react-select';

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
    const handleSubmit = (e) => {
        e.preventDefault();
         console.log(order)
        // setOrders(...orders, order)
        // console.log(orders, '*')
        // console.log(order)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Order #' value={order.orderNo} onChange={handleChange} name="orderNo"></input>
        <select value={select} name="product" onChange={handleChange} >
            {products.map((element)=> {
                return (<option name="product" >{element.title}</option> 
                    )
            })}
        </select>
        {/* <Select name="product" value={options.value} options={options}  /> */}
        <input type="text" placeholder='quantity' value={order.quantity} onChange={handleChange} name="quantity"></input>
        <input type="submit" value="submit" />
        <button onClick={onClose}>Close</button>  
        </form>  
    </div>
  )
}

export default OrderModal