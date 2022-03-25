import React from 'react';
import './CartSingleItem.css'
import { BsFillTrashFill } from 'react-icons/bs';

const CartSingleItem = ({ item, removeSingleItem }) => {
    const { id, name, img } = item;
    return (
        <div className="card mb-3 shadow ">
            <div className="card-body">

                <div className="d-flex flex-row justify-content-between align-items-center">
                    <div className="cart-image">
                        <img src={img} alt="" />
                    </div>
                    <h5 className="mx-2">{name}</h5>
                    <button onClick={() => removeSingleItem(id)} className="btn btn-sm btn-outline-danger"><BsFillTrashFill /></button>
                </div>
            </div>
        </div>
    );
};

export default CartSingleItem;