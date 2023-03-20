import React from 'react'
import {useState} from 'react';

const FormDesc = (props) => {
    const [formData, setFormData] =useState({searchterm:"",});

    const handleChange = (event) => {
        //use the event object to detect key and value to update
        setFormData({ ...formData, [event.target.name]: event.target.value });
        console.log(formData)
    };
  return (
    <div>
         <form >
        <input 
        type="text" 
        name="searchterm" 
        onChange={handleChange} 
        value={formData.searchterm}
        />
        </form>
    </div>
  )
}

export default FormDesc