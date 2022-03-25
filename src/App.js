import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('vegetablesData.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);



  return (
    <div className='container'>
      <Header></Header>
      <Shop products={products}></Shop>
    </div>
  );
}

export default App;
