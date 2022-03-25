import React from 'react';
import './Cart.css';
import { BsFillTrashFill } from 'react-icons/bs';

const Cart = () => {
    return (
        <div className="sticky-top">
            <p className="mb-3 fw-bold">Cart Products List</p>

            <div className="card mb-3 shadow ">
                <div className="card-body">

                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <div className="cart-image">
                            <img className="img-fluid rounded-2" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp" alt="" />
                        </div>
                        <h5 className="mx-2">iphone 12</h5>
                        <button className="btn btn-sm btn-danger"><BsFillTrashFill /></button>
                    </div>
                </div>
            </div>
            <div className="card mb-3 shadow ">
                <div className="card-body">

                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <div className="cart-image">
                            <img className="img-fluid rounded-2" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp" alt="" />
                        </div>
                        <h5 className="mx-2">iphone 12</h5>
                        <button className="btn btn-sm btn-danger"><BsFillTrashFill /></button>
                    </div>
                </div>
            </div>


            <div className="text-center">
                <button className="btn btn-success w-75 my-2">Choose 1 for me</button>
                <button className="btn btn-danger w-75">Choose again</button>
            </div>
        </div>
    );
};

export default Cart;