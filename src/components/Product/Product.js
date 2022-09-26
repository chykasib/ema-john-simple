import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = ({ handler, product }) => {
    const { img, name, price, ratings, seller } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>price: ${price}</p>
                <p><small>seller: {seller}</small></p>
                <p><small>rating: {ratings}</small></p>
            </div>
            <button onClick={() => handler(product)} className='btn-cart'>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;