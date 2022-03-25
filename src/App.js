import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // checking duplicate product in cart
    const item = cart.filter(e => e.id === product.id);
    if (item.length === 0) {
      const newCart = [...cart, product];
      setCart(newCart);
    }
  }

  useEffect(() => {
    fetch('vegetablesData.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);


  return (
    <div className='container-fluid '>
      <Header items={cart.length}></Header>
      <Shop addToCart={addToCart} cart={cart} products={products}></Shop>
    </div>
  );
}

export default App;
