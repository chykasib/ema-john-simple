import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    return (
        <div>
            <h4>order summary</h4>
            <p>Selected Item: {cart.length}</p>
        </div>
    );
};

export default Cart;