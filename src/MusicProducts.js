import React,{ useContext } from "react";
import { Cart } from '../../StoreContext/CartContext';
import axios from 'axios';
import styles from "./MusicProducts.module.css";

const productsArr = [
  {
    album: "Album 1",
    title: "Colors",
    price: 120,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    album: "Album 2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    album: "Album 3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    album: "Album 4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const MusicProducts = () => {


  const {cart, setCart, userId, setUserId} = useContext(Cart)

  function addItemHandler(product) {

      setCart([...cart, product])
      console.log(`Id: ${userId}`)
      axios.post(`https://crudcrud.com/api/0a02abc72e4b4103862469a3e8c178e9/cart${userId}`, product)
      .then((response) => {
        console.log(`Axios: ${response}`)
      }).catch((err) => {
        console.log(`err: ${err}`)
      })
  }

  const removeItemHandler = (items)=>{
    setCart(cart.filter((c) => c.album !==items.album))
  }

  return (
    <section className={styles.musicSection}>
      {productsArr.map((items) => {
        return (
            
              <ul key={items.album} className={styles.musicContainer}>
                <h3>{items.album}</h3>
                <li className={styles.musicImage}>
                  <img src={items.imageUrl} alt='Music Pictures'/>
                </li>
                <li className={styles.musicDetail}>
                  <span>
                    {items.title} : 
                    ${items.price}
                  </span>
                  {cart.includes(items) ? (

                    <button className={styles.musicBtn} onClick={() => removeItemHandler(items)}
                    >Remove From Cart</button>
                  ): <button className={styles.musicBtn} onClick={() => addItemHandler(items)}
                  >ADD TO CART</button>}

                </li>
              </ul>

              );
      })}
      {console.log(`props.cartMusic ${cart}`)}
    </section>
  );
};
export default MusicProducts;