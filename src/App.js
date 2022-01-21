import Recat,{useState} from 'react';
import Cart from './Components/Cart/CartList';
import Footer from "./Components/Layout/Footer/Footer";
import Header from "./Components/Layout/Header/Header";
import Merch from "./Components/Layout/Merch/Merch";
import Music from "./Components/Layout/Music/Music";
import Store from "./Components/Pages/Store";
import HomePage from "./Components/Pages/HomePage";
import About from "./Components/Pages/About";
import { BrowserRouter as Router, Routes, Route,Navigate} from "react-router-dom";
import CartContext from "./Components/StoreContext/CartContext";
import CartList from "./Components/Cart/CartList";
import Contact from "./Components/Pages/Contact";
import Login from "./Components/Pages/Login";

function App() {

  const [isLoggedIn, setIsloggedIn] = useState(false);
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

  ];

  const style = {
    color: "white",
    backgroundColor: "#383e3e",
    borderRadius: "5px",
    border: "none",
    height: "34px",
    width: "244px",
    cursor: "pointer",
    alignItem: "center",
    marginLeft: "2%",
    marginTop: "5%",
  };

  const[cartItems, setCartItems] = useState(false)
  const [cart, setCart] = useState(cartElements)

  const CartItems = () =>{
    setCartItems(true);
  };
  const cartItemsClose = () =>{
    setCartItems(false)
  };

  const putRequestHandler = async (contact) => {
    const response = await fetch(
      "https://react-http-7d042-default-rtdb.firebaseio.com/contact.json",
      {
        method: "POST",
        body: JSON.stringify(contact),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data)

}

 
  return (
    <CartContext>
      
      <Header showCartItem={CartItems} cartNumber = {cart}/>
      {cartItems && <CartList Close = {cartItemsClose} item={cart}/>}

      <Routes>
      <Route exact path="/" element={<HomePage />} />
        {isLoggedIn && <Route exact path="/store" element={<Store />} />}
        <Route exact path="/about" element={<About />} />
        <Route
          exact
          path="/contact"
          element={<Contact putRequest={putRequestHandler} />}
        />
        <Route
          exact
          path="/login"
          element={<Login checkLogin={setIsloggedIn} />}
        />
        {!isLoggedIn && <Route path="*" element={<Navigate to="/login"></Navigate>}></Route>}
      </Routes>
      <button style={style}>See The Cart</button>
      <Footer/>
    </CartContext>
  );
}

export default App;