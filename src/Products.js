import React from 'react';
import './Products.css';
import { useStateValue } from './StateProvider';

function Products({id, title, price, image}) {
    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () =>{
        dispatch({
            type: " ADD_TO_BASKET ",
            item:{
                id: id,
                title: title,
                image: image,
                price: price 
            }
        })
         
    };
    return (
        <div className="product">
            <div className="product__info">
            <p className="product__title">{title}</p>
            <p className="product__price">
                <small>Ksh</small>
                <strong>{price}</strong>
            </p>
            <img className="product__image" src={image} alt="" />
            <button className="product__button" onClick={addToBasket}>Add to cart</button>
            </div>
        </div>
    )
}

export default Products;
