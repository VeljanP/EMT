import React from 'react';
import {Link, NavLink} from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        const loggedInUser = {
            id: 1
        };

        return (
            <nav className="navbar navbar-expand-lg ">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#p\ShopNavbar" aria-controls="candyShopNavbar" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="candyShopNavbar">
                    <Link to={"/"} className="navbar-brand" src="\logo candy.png">Candy Shop</Link>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink to={"/home"} exact className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/products"} exact className="nav-link" href="#">Sweets</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/products/create"} exact className="nav-link">Create Product</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to={{pathname: `/checkout`}} exact className="nav-link">
                                <i className="fa fa-shopping-cart"/>
                                <span className="">{this.props.shoppingCart.length || ''}</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={{pathname: `/users/${loggedInUser.idKorisnik}`}} exact className="nav-link">
                                <i className="fa fa-user"/> Profile
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
