import React from 'react';
import './Male.css';
import { useStateValue } from './StateProvider';

function Male({id, title, price, image}) {
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
        <div className="male">
            <div className="male__info">
            <p  className="male__title">{title}</p>
            <p className="male__price">
                <small>Ksh</small>
                <strong>{price}</strong>
            </p>
            <img className="male__image" src={image} alt="" />
            <button className="male__button" onClick={addToBasket}>Add to cart</button>
            </div>
        </div>
    )
}

export default Male;
