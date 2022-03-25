import React from 'react';
import CartSingleItem from '../CartSingleItem/CartSingleItem';

const Cart = ({ cart, emptyWholeCart, chooseRandomItem, removeSingleItem }) => {

    return (
        <div className="sticky-top">
            <p className="py-4 fw-bold">Cart Products List ({cart.length}) </p>


            {
                cart.map((item) => <CartSingleItem
                    key={item.id}
                    item={item}
                    removeSingleItem={removeSingleItem}
                ></CartSingleItem>)
            }

            <div className="text-center">
                <button onClick={chooseRandomItem} className="btn btn-success w-75 my-2">Choose 1 for me</button>
                <button onClick={emptyWholeCart} className="btn btn-danger w-75">Choose again</button>
            </div>
        </div>
    );
};

export default Cart;