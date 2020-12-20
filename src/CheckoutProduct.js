import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, title, image, price}) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        
        dispatch({
            type:" REMOVE_FROM_BASKET ",
            id: id,
        });


    }
    return (

        <div className="checkoutproduct">
            <img className="checkoutproduct__image" src={image} alt=""/>
            <div className="checkoutproduct__info">
                <p className="checkoutproduct__title">{title}</p>
                <p className="checkoutproduct__price">
                    <small>Ksh</small>
                    <strong>{price}</strong>
                </p>
                <button onClick={removeFromBasket}>Remove from Basket</button>


            </div>
            
        </div>
    )
}

export default CheckoutProduct;
