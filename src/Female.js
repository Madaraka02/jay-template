import React from 'react';
import './Female.css';
import { useStateValue } from './StateProvider';

function Female({id, title, price, image}) {
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
        <div className="female">
            <div className="female__info">
            <p  className="female__title">{title}</p>
            <p className="female__price">
                <small>Ksh</small>
                <strong>{price}</strong>
            </p>
            <img className="female__image" src={image} alt="" />
            <button className="female__button" onClick={addToBasket}>Add to cart</button>
            </div>
        </div>
    )
}

export default Female;
