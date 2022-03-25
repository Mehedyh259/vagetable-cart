import React from 'react';
import Cart from '../Cart/Cart';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Shop.css'

const Shop = ({ products, addToCart, cart, emptyWholeCart, chooseRandomItem, removeSingleItem }) => {

    return (
        <div className="container my-3">
            <div className="row">
                {/* shop product area */}
                <div className='col-12 col-sm-11 col-lg-9 col-md-7 mx-auto'>
                    <div className="row">
                        {
                            products.map((product) => <SingleProduct addToCart={addToCart} key={product.id} product={product}></SingleProduct>)
                        }
                    </div>
                </div>

                {/* Cart area */}
                <div className='col-12 col-sm-11 col-lg-3 col-md-5 mx-auto p-2 shadow'>
                    <Cart
                        cart={cart}
                        emptyWholeCart={emptyWholeCart}
                        chooseRandomItem={chooseRandomItem}
                        removeSingleItem={removeSingleItem}

                    />
                </div>
            </div>
        </div>
    );
};

export default Shop;