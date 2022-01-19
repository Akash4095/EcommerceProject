import React from "react";
import styles from './Music.module.css'
import MusicProducts from "./MusicProducts";
const Music = (props) => {
    return (
    
        <div className={styles.musicBody}>
            <h2>MUSIC</h2>
            <MusicProducts />
        </div>
        
    )
}

export default Music;
