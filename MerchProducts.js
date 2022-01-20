import React from "react";
import  "./MerchProducts.css";

const merchArr = [
  {
    title: "T-Shirt",
    price: 19.99,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Shirt.png",
  },

  {
    title: "Coffe",
    price: 6.99,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Cofee.png",
  },
];

const MerchProducts = () => {
  const product = merchArr.map((item) => {
    return (
      <div className="title" key={item.price}>
        <h2>{item.title}</h2>

        <div className="image">
          <img src={item.imageUrl} alt="" />
        </div>

        <div className="price">
          <span>${item.price}</span>
          <button className="button" 
          >ADD TO CART</button>
        </div>

      </div>
      
    );
  });

  return (
    <section className="container">
      <div className="items" >{product}</div>
    </section>
  );
};

export default MerchProducts;
