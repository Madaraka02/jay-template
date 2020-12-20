import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {

    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
            {basket?.length === 0 ? (
                <div>
                    <h2 className="checkout__title">Your shopping basket is empty</h2>
                    <p>
                        You have not added any items in the basket.To buy go to the products 
                        and click the "Add to cart" next to the item.
                    </p>
                </div>
            ):(
                <div>
                <h2 className="checkout__title">Your shopping basket</h2>
                {basket.map((item) => (
                    <CheckoutProduct
                    id={item.id}  
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    />
                ))} 
             </div>
            )}
               
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal/> 
                </div>
            )}

            
        </div>
    );
}

export default Checkout;
