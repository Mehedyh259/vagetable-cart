import React from 'react';
import CartSingleItem from '../CartSingleItem/CartSingleItem';

const Cart = ({ cart, emptyWholeCart, chooseRandomItem, removeSingleItem }) => {

    return (
        <div className="sticky-top py-4">
            <p className="mb-3 fw-bold">Cart Products List ({cart.length}) </p>

            {
                cart.map((item) => <CartSingleItem
                    key={item.id}
                    item={item}
                    removeSingleItem={removeSingleItem}
                ></CartSingleItem>)
            }

            <div className="text-center">
                <button onClick={chooseRandomItem} className="btn btn-outline-success w-75 my-2">CHOOSE 1 FOR ME</button>
                <button onClick={emptyWholeCart} className="btn btn-outline-danger w-75">CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default Cart;