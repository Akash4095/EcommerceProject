import Recat,{useState} from 'react';
import Cart from './Components/Cart/Cart';
import Footer from "./Components/Layout/Footer/Footer";
import Header from "./Components/Layout/Header/Header";
import Merch from "./Components/Layout/Merch/Merch";
import Music from "./Components/Layout/Music/Music";

function App() {
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
  const CartItems = () =>{
    setCartItems(true);
  }
  const cartItemsClose = () =>{
    setCartItems(false)
  }
  return (
    <div>
      {/* <Header/> */}
      <Header showCartItem={CartItems}/>
      {cartItems && <Cart Close = {cartItemsClose} />}
      
      <Music/>
      <Merch/>
      <button style={style}>See The Cart</button>
      <Footer/>
    </div>
  );
}

export default App;