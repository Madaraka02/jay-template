import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from "react-router-dom";

function Subtotal() {
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();


    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value) => (
                 <p>
                    subtotal ({basket.length} items): <strong>{value}</strong>
                </p>
            )}

             decimalScale={2}
             value={getBasketTotal(basket)}
             displayType={"text"}
             thousandSeparator={true}
             prefix={"KSh"}
            />
            <button className="button" onClick={e => history.push('/payment')}>
                Proceed to checkout</button>
        </div>
    )
}


export default Subtotal