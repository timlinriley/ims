import logo from './logo.svg';
import './App.css';
import ProductTable from './components/ProductTable';
import {useState, useEffect} from 'react';
import Table from './components/Table';

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
      
      <Table updateArray={updateOrderArray}/>
      {/* <ProductTable products={product}/> */}
    </div>
  );
}

export default App;
