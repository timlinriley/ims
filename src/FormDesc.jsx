import React from 'react'
import {useState} from 'react';

const FormDesc = (props) => {
    const [formData, setFormData] =useState("");

    const handleChange = (event) => {
        //use the event object to detect key and value to update
        setFormData({ ...formData, [event.target.name]: event.target.value });
        console.log(formData)
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        props.products.filter((element) =>{
           if (element.description.includes(formData))
           return <tr >
           <td className="tdata"><img className="tdataimg" src={element.thumbnail} /></td>
           <td className="tdatadesc" >{element.description}</td>
           <td className="tdata">{element.stock}</td>
           <td className="tdata">{element.category}</td>
           <td className="tdata">{element.brand}</td>
           <td className="tdata">{element.price}</td>
       </tr>
          console.log(formData, '*')
        })
    }
  return (
    <div>
         <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        name="searchterm" 
        onChange={handleChange} 
        value={formData.searchterm}
        />
         <input type="submit" value="search"  />
        </form>
    </div>
  )
}

export default FormDesc