import React from "react";
import styles from './Music.module.css'
import MusicProducts from "./MusicProducts";
const Music = (props) => {
    return (

        <div className={styles.musicBody}>
            <h1>MUSIC</h1>
            <MusicProducts AddToCart = {props.AddToCartStore} cartMusic = {props.cartApp} setCartMusic = {props.setCartApp}/> <MusicProducts/>
        </div>

    )
}

export default Music;