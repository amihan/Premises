import React from 'react';
import logoUrl from '../assets/img/icon.svg';
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <Link to='/'>
                    <div className="header__logo">
                        <img width="46" src={logoUrl} alt="Pizza logo"/>
                        <div>
                            <h1>Book</h1>
                            <p>самое выгодное помещение у нас</p>
                        </div>
                    </div>
                </Link>
                <div className="header__cart">
                    <Link to="/basket" className="button button--cart">
                        Оформить бронь
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;