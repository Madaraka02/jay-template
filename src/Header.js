import React from 'react';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from "react-router-dom";
import './Header.css';
import { useStateValue } from './StateProvider';

function Header() {
    const [{ basket }] = useStateValue();
    console.log(basket);


    return (
        <nav className="header">
            <div className="header__right">
                <Link to="/">
                <img className="header__logo" src="logo.png" alt="JAY SHOP"/>
                </Link>
            </div>
            <div className="header__middle">
                <Link to="/" className="header__link ">
                    <h4 className="shoes">mALE shoes</h4>
                </Link>
                <Link to="/Shop" className="header__link ">
                    <h4 className="shoes">female shoes</h4>
                </Link>
                <Link to="/MaleClothes" className="header__link ">
                    <h4 className="shoes">male clothes</h4>
                </Link>
            <Link to="/FemaleClothes" className="header__link">
                    <h4 className="clothes">female clothes</h4>
                </Link>
                <Link to="/Slides" className="header__link">
                    <h4 className="clothes">sandals & slides</h4>
                </Link>
            </div>
            
            <Link to="/checkout" className="header__link">
            <div className="header__cart">
                <ShoppingCartSharpIcon className="basket"/>
    <span className="header__basketCount">{basket?.length}</span>
            </div>
            </Link>
           
            
        </nav>
    )
}

export default Header
