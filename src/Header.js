import React,{useContext} from 'react';
import './Header.css'


const Header = (props)=>{
    
    return (
        <header>
            <ul className='header'>
               <li><a href="">HOME</a></li>
               <li><a href="#">STORE</a></li> 
               <li><a href="" >ABOUT</a></li>
               <button className='btn' onClick={props.showCartItem}>"cart" <span className='cart-number'>1</span></button>
            </ul>
            <h1>The Generics</h1>
        </header>
    )
}

export default Header;