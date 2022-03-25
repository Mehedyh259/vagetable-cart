import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

const SingleProduct = ({ product, addToCart }) => {

    const { name, img, price } = product;

    return (
        <div className="col-lg-4 col-md-6 col-sm-11 col-12 my-2">
            <div className="card single-product p-3 shadow rounded-lg">
                <img className='card-img-top img-fluid img-thumbnail mb-3' src={img} alt="" />
                <div className="card-block">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">Price: ${price}</p>
                    <button onClick={() => addToCart(product)} className="btn w-100 btn-outline-primary">Add To Cart <FaCartPlus /></button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct; 