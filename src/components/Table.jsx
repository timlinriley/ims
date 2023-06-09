import React from 'react'
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useGlobalFilter, useSortBy, useTable, useFilters } from "react-table";
import ColumnFilter from './ColumnFilter';
import OrderPortal from './OrderPortal';
import '../App.css';

const Table = (props) => {
    // Make api call to retrieve product data:
   const [products, setProducts] = useState([]);
   const getProducts = async () => {
    const response = await axios.get('https://dummyjson.com/products?limit=0&skip=0&select=title,price,description,stock,thumbnail,category,brand')
    const data = response;
    // console.log(data)
    // Because response = an array called data with an object that has a value called data which contains an array called products: access only the products array like this:
    setProducts(data.data.products);
    console.log(products)
   }
   
// Set up the table :
   const columns = useMemo(() => [
    {
        Header: 'Image',
        accessor: 'thumbnail',
        Cell: ({ value }) => <img className="tdataimg" src={value} />,

    },
    {
        Header: 'Title',
        accessor: 'title',
        Filter: ColumnFilter,
    },
    {
        Header: 'Quantity',
        accessor: 'stock',
        Filter: ColumnFilter,

    },
    {
        Header: 'Brand',
        accessor: 'brand',
        Filter: ColumnFilter,

    },
    {
        Header: 'Category',
        accessor: 'category',
        Filter: ColumnFilter,

    },
    {
        Header: 'Price',
        accessor: 'price',
        Cell: ({ value }) => <div>${value}</div>,
        Filter: ColumnFilter,

    }

   ],[])
   const defaultColumn = useMemo(
    () => ({
      Filter: ColumnFilter,
    }),
    []
  );

//   Create table instance to pass to the table elements:
   const tableInstance = useTable({ columns: columns, data: products, defaultColumn}, useFilters);

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
    <div className="table">
        <OrderPortal updateOrderArray={props.updateOrderArray} products={products}/>
        <h1>AVAILABLE INVENTORY</h1>
        <table {...getTableProps()}>
            <thead className="head">
              { headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()}>
                            {column.render('Header')}
                            <div>{column.canFilter ? column.render('Filter') : null}</div>
                        </th>
                    ))}
                </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row =>{
                    prepareRow(row)
                    return (
                        <tr className="trow" {...row.getRowProps()}>
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