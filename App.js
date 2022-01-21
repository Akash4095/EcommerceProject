import Recat,{useState} from 'react';
import Cart from './Components/Cart/CartList';
import Footer from "./Components/Layout/Footer/Footer";
import Header from "./Components/Layout/Header/Header";
import Merch from "./Components/Layout/Merch/Merch";
import Music from "./Components/Layout/Music/Music";
import Store from "./Components/Pages/Store";
import HomePage from "./Components/Pages/HomePage";
import About from "./Components/Pages/About";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CartContext from "./Components/StoreContext/CartContext";
import CartList from "./Components/Cart/CartList";
import Contact from "./Components/Pages/Contact";
function App() {

  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

  ];

  const style = {
    'color': '#56CCF2',
    'backgroundColor': '#777',
    'borderRadius': '7px',
    'border': 'none',
    'height': '50px',
    'width': '150px',
    'cursor': 'pointer',
    'alignItem': 'center',
    'marginLeft': '45%',
    'marginTop': '5%',
    'fontSize':'20px',
    'fontWeight':'700'
  }

  const[cartItems, setCartItems] = useState(false)
  const [cart, setCart] = useState(cartElements)

  const CartItems = () =>{
    setCartItems(true);
  }
  const cartItemsClose = () =>{
    setCartItems(false)
  }

  const putRequestHandler = async(contact) =>{
    const response = await fetch("https://react-http-7d042-default-rtdb.firebaseio.com/contact.json", {
        method: 'POST',
        body: JSON.stringify(contact),
        headers:{
            'Content-Type': 'application/json'
        }

    });
    const data = await response.json();
    console.log(data)

}

 
  return (
    <CartContext>
      
      <Header showCartItem={CartItems} cartNumber = {cart}/>
      {cartItems && <CartList Close = {cartItemsClose} item={cart}/>}

      <Routes>
        <Route exact path="/" element={<Store cart = {cart} setCart = {setCart} />} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/homepage" element={<HomePage/>} />
        <Route exact path="/contact" element={<Contact putRequest = {putRequestHandler}/>} />
      </Routes>
      <button style={style}>See The Cart</button>
      <Footer/>
    </CartContext>
  );
}

export default App;