import React,{useContext} from 'react';
import './Header.css'

import { NavLink } from "react-router-dom";
import {Link} from 'react-router-dom';
import { Cart } from "../../StoreContext/CartContext";
import './Navlink.css'

const Header = (props)=>{

    const {cart} = useContext(Cart)
    
    return (
        <header>
            <ul className='header'>
               <li><NavLink className={(navData) => navData.isActive ? "active" : "" } to="/">HOME</NavLink></li>
               <li><NavLink className={(navData) => navData.isActive ? "active" : "" } to="/store">STORE</NavLink></li> 
               <li><NavLink className={(navData) => navData.isActive ? "active" : "" } to="/about">ABOUT</NavLink></li>
               <li><NavLink className={(navData) => navData.isActive ? "active" : "" } to="/contact">CONTACT</NavLink></li>
               <li><NavLink className={(navData) => navData.isActive ? "active" : "" } to="/login">LOGIN</NavLink></li>
               <button className='btn' onClick={props.showCartItem}>"cart" <span className='cart-number'>{cart.length}</span></button>
            </ul>
            <h1>The Generics</h1>
        </header>
    )
}

export default Header;