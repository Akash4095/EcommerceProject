import Merch from "../Layout/Merch/Merch";
import Music from "../Layout/Music/Music";

const Store = (props) =>{
    return(
        <>
        <Music AddToCartStore = {props.AddToCartApp}  cartApp ={props.cart} setCartApp = {props.setCart}/>
        <Merch/>
        </>
    )
}

export default Store;