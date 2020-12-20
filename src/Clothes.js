import React from 'react';
import './Clothes.css';
import { useStateValue } from './StateProvider';

function Clothes({id, title, price, image}) {
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
        <div className="clothe">
            <div className="clothe__info">
            <p  className="clothe__title">{title}</p>
            <p className="clothe__price">
                <small>Ksh</small>
                <strong>{price}</strong>
            </p>
            <img className="clothe__image" src={image} alt="" />
            <button className="clothe__button" onClick={addToBasket}>Add to cart</button>
            </div>
        </div>
    )
}

export default Clothes;
