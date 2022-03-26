import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Questions from './components/Questions/Questions';
import Shop from './components/Shop/Shop';

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // checking if cart has maximum 4 products
    if (cart.length === 4) {
      alert("You have selected maximum 4 products");
    } else {
      // checking duplicate product in cart
      const item = cart.filter(e => e.id === product.id);
      if (item.length === 0) {
        const newCart = [...cart, product];
        setCart(newCart);
      }
    }
  }

  const emptyWholeCart = () => {
    setCart([]);
  }

  const removeSingleItem = (id) => {
    const remainItems = cart.filter(e => e.id !== id);
    setCart(remainItems);
  }

  const chooseRandomItem = () => {
    if (cart.length !== 0) {
      const randomCart = [];
      const randomItem = cart[(Math.random() * cart.length) | 0];
      randomCart.push(randomItem);
      setCart(randomCart);
    }
  }

  useEffect(() => {
    fetch('vegetablesData.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);


  return (
    <div>
      <Header items={cart.length}></Header>
      <div className='container-fluid '>
        <Shop
          addToCart={addToCart}
          emptyWholeCart={emptyWholeCart}
          chooseRandomItem={chooseRandomItem}
          removeSingleItem={removeSingleItem}
          cart={cart}
          products={products}
        ></Shop>

        <Questions></Questions>
      </div>
    </div>

  );
}

export default App;
