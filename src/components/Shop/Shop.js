import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from './Cart/Cart';
import './Shop.css'
const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    const handlerAddToClick = (product) => {
        console.log(product)
        const newProduct = [...cart, product];
        setCart(newProduct)
    }

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id} product={product} handler={handlerAddToClick}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;