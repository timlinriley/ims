import React from 'react'
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useGlobalFilter, useSortBy, useTable } from "react-table";

const Table = () => {
   const [products, setProducts] = useState([]);
   const getProducts = async () => {
    const response = await axios.get('https://dummyjson.com/products?limit=0&skip=0&select=title,price,description,stock,thumbnail,category,brand')
    const data = response;
    // console.log(data)
    setProducts(data.data.products);
   }


   const columns = useMemo(() => [
    {
        Header: 'Image',
        accessor: 'thumbnail',
    },
    {
        Header: 'Title',
        accessor: 'title',
    },
    {
        Header: 'Quantity',
        accessor: 'stock',
    },
    {
        Header: 'Category',
        accessor: 'category',
    },
    {
        Header: 'Price',
        accessor: 'price'
    }
   ],[])

   const productsData = useMemo(() => [
    [...products], [products]
   ])
    useEffect(() => {
        getProducts();
    }, [])
    // console.log(products)
  return (
    <div>
        <h1>Table</h1>
       
        
    </div>
  )
}

export default Table