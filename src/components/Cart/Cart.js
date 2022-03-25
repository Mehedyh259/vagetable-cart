import React from 'react';
import CartSingleItem from '../CartSingleItem/CartSingleItem';

const Cart = ({ cart }) => {

    return (
        <div className="sticky-top">
            <p className="py-4 fw-bold">Cart Products List</p>


            {
                cart.map((item) => <CartSingleItem key={item.id} item={item}></CartSingleItem>)
            }

            <div className="text-center">
                <button className="btn btn-success w-75 my-2">Choose 1 for me</button>
                <button className="btn btn-danger w-75">Choose again</button>
            </div>
        </div>
    );
};

export default Cart;