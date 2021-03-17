import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    //console.log(props);
    const {img,name,seller,price,stock}=props.product;
    const cartIcon=<FontAwesomeIcon icon={faShoppingCart}/>;
    return (
        <div className='product'>
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4  className='product-name'>{name}}</h4>
                <p><small>By: {seller}</small></p>
                <p><small>$ {price}</small></p>
                <p><small>Only {stock} left in stock</small></p>
                <button 
                    className='main-button' 
                    onClick={()=>props.handleAddProduct(props.product)}>
                    {cartIcon} Add To Cart
                </button>
            </div>
        </div>
    );
};

export default Product;