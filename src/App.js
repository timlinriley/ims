import logo from './logo.svg';
import './App.css';
import ProductTable from './components/ProductTable';
import {useState, useEffect} from 'react';
import Table from './components/Table';
import Orders from './components/Orders';
import { Route, Routes } from "react-router-dom";
import Nav from './components/Nav';
import Main from './components/Main';


function App() {
  const [orderArray, setOrderArray] = useState([])
      const updateOrderArray = (array) => {
        setOrderArray(array);
        console.log(orderArray, 'orderArray updated')
      }

  // const [product, setProduct] = useState({});
  // // const [result, setResult] = useState([]);
  // const getProducts = async () => {
  //   const response = await fetch(
  //     'https://dummyjson.com/products?limit=0&skip=0&select=title,price,description,stock,thumbnail,category,brand'
  //   );
  //   const data = await response.json();
  //   setProduct(data);
  //   }
  //   const Call = () => {
  //   useEffect(() => {
  //     getProducts()
  //   },[])
  // };
  // Call()
  // Call()
  // console.log(product);

    return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/ProductTable" element={<Table />} />
        <Route path="/Orders" element={<Orders />} />
      </Routes>
      <Table updateOrderArray={updateOrderArray}/>
      {/* <ProductTable products={product}/> */}
      <Orders orders={orderArray}/>
    </div>
  );
}

export default App;
