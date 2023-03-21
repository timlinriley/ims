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
    console.log(products)
   }


   const columns = useMemo(() => [
    {
        Header: 'Image',
        accessor: 'thumbnail',
        Cell: ({ value }) => <img className="tdataimg" src={value} />,

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

//    const productsData = useMemo(() => [
//     [...products]
//    ]);
//    console.log(productsData)
   const tableInstance = useTable({ columns: columns, data: products});

   const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
   } = tableInstance;

    useEffect(() => {
        getProducts();
    }, [])
    // console.log(products)
  return (
    <div>
        <h1>Table</h1>
        <table {...getTableProps()}>
            <thead>
              { headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()}>
                            {column.render('Header')}
                        </th>
                    ))}
                </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row =>{
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                           {row.cells.map(cell => {
                            return (
                                <td {...cell.getCellProps()}>
                                    {cell.render('Cell')}
                                </td>
                              )
                           })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
       
        
    </div>
  )
}

export default Table