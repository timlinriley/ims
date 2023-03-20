import logo from './logo.svg';
import './App.css';
import ProductTable from './components/ProductTable';
import {useState, useEffect} from 'react';

function App() {
  const [product, setProduct] = useState({});
  // const [result, setResult] = useState([]);
  const getProducts = async () => {
    const response = await fetch(
      'https://dummyjson.com/products?limit=0&skip=0&select=title,price,description,stock,thumbnail,category,brand'
    );
    const data = await response.json();
    setProduct(data);
    console.log(product);
    }
    const Call = () => {
    useEffect(() => {
      getProducts()
    },[])
  };
  Call()
  Call()
    return (
    <div className="App">
      <ProductTable products={product}/>
    </div>
  );
}

export default App;
