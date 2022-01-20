import React from "react";

import "./MusicProducts.css";

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

const MusicProducts = (props) => {
  const product = productsArr.map((items) => {
    return (
      <div className="title" key={items.price}>
        <h2>{items.album}</h2>

        <div className="image">
          <img src={items.imageUrl} alt="" />
        </div>

        <div className="price">
          <span>${items.price}</span>
          <button className="button">ADD TO CART</button>
        </div>

        {props.cartMusic.includes(items) ? (
          <button
            className="button"
            onClick={() => {
              props.setCartMusic(
                props.cartMusic.filter((c) => c.album !== items.album)
              );
            }}
          >
            Remove From Cart
          </button>
        ) : (
          <button
            className="button"
            onClick={() => {
              props.setCartMusic([...props.cartMusic, items]);
            }}
          >
            ADD TO CART
          </button>
        )}
      </div>
    );
  });

  return (
    <section className="container">
      <div className="items">{product}</div>
    </section>
  );
};

export default MusicProducts;
