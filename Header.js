import React,{useContext} from 'react';
import './Header.css'
import Cart from '../../Cart/Cart'

import {Link} from 'react-router-dom';


const Header = (props)=>{

    const cartLength = props.cartNumber.length
    
    return (
        <header>
            <ul className='header'>
               <li><a href="/homepage">HOME</a></li>
               <li><Link to="/">STORE</Link></li> 
               <li><Link to="/about" >ABOUT</Link></li>
               <button className='btn' onClick={props.showCartItem}>"cart" <span className='cart-number'>{cartLength}</span></button>
            </ul>
            <h1>The Generics</h1>
        </header>
    )
}

export default Header;