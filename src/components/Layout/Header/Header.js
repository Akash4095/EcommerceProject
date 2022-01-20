import React,{useContext} from 'react';
import './Header.css'
// import CartList from '../../Cart/CartList'

import {Link} from 'react-router-dom';
import { Cart } from "../../StoreContext/CartContext";


const Header = (props)=>{

    const {cart} = useContext(Cart)
    
    return (
        <header>
            <ul className='header'>
               <li><a href="/homepage">HOME</a></li>
               <li><Link to="/">STORE</Link></li> 
               <li><Link to="/about" >ABOUT</Link></li>
               <button className='btn' onClick={props.showCartItem}>"cart" <span className='cart-number'>{cart.length}</span></button>
            </ul>
            <h1>The Generics</h1>
        </header>
    )
}

export default Header;