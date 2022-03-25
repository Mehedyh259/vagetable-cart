import React from 'react';
import Cart from '../Cart/Cart';

const Shop = ({ products }) => {

    console.log('shop', products);
    return (
        <div className="container my-3">
            <div className="row">
                {/* shop product area */}
                <div className='col-12 col-sm-11 col-lg-9 col-md-7 mx-auto'>
                    product area
                </div>

                {/* Cart area */}
                <div className='col-12 col-sm-11 col-lg-3 col-md-5 mx-auto p-2 shadow'>
                    <Cart />
                </div>
            </div>
        </div>
    );
};

export default Shop;