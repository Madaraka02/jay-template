import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__top">
            <div className="Top__left">
            <h6>ADDRESS:</h6>
            <p>Utalii Street, View Park Towers, Nairobi Kenya</p>
            <h6>PHONE:</h6>
            <p>(+254) 020 8000 273 / +254 701 423 251</p>
            <h6>EMAIL:</h6>
            <p>sales@shoemart.biz</p>
            <h6>WORKING DAYS/HOURS:</h6>
            <p>24/7</p>
            </div>
            <div className="Top__right"></div>
            </div>
            <hr></hr>
            <div className="footer__bottom">
                <p className="footer__copyright">
                &copy;  Jay  Trendy Collections Kenya. {new Date().getFullYear()}. All Rights Reserved
                </p>
            </div>
        </div>
    )
}

export default Footer;
