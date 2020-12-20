import React from 'react';
import './SlideDb.css';
import { useStateValue } from './StateProvider';

function SlideDb({id, title, price, image}) {
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
        <div className="slideDb">
            <div className="slideDb__info">
            <p  className="slideDb__title">{title}</p>
            <p className="slideDb__price">
                <small>Ksh</small>
                <strong>{price}</strong>
            </p>
            <img className="slideDb__image" src={image} alt="" />
            <button className="slideDb__button" onClick={addToBasket}>Add to cart</button>
            </div>
        </div>
    )
}

export default SlideDb;