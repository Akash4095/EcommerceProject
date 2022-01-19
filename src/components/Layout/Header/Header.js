import React from "react";
import styles from "./Header.module.css";


const Header = () => {
  return (
      <div className={styles.headBody}>
        <div className={styles.innerHeader}>
          <div className={styles.logoContainer}>
            <span>EcomStore</span>
          </div>
          <ul className={styles.navigation}>
            <a href="#"><li>HOME</li></a>
            <a href="#"><li>STORE</li></a>
            <a href="#"><li>ABOUT</li></a>
            <button className={styles.cartBtn}><li>Cart 0</li></button>
          </ul>

        </div>
        <h1>The Generics</h1>
      </div>
  );
};

export default Header;
