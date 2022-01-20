import React from "react";
import styles from "./Cart.module.css";
import { Container, Row, Col, Button } from "reactstrap";
const cartElements = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];

const Cart = (props) => {

  const styleBtn = {
    'marginLeft': '72%',
    'height': '40px',
    'marginTop' : '2%',
  }
  return (
    <section className={styles.cartBody}>
      <Button style={styleBtn} onClick={props.Close}>X</Button>
      <h2 className={styles.cartHeading}>CART</h2>

      <Row>
        <Col xs="4">
          <span className={styles.headText}>Item</span>
          <hr />
        </Col>
        <Col xs="4">
          <span className={styles.headText}>Price</span>
          <hr/>
        </Col>
        <Col xs="4">
          <span className={styles.headText}>Quantity</span>
          <hr />
        </Col>
      </Row>
      {props.item.map((items) => {
        return (
          <Container style={{ marginTop: "20px" }}>
            <Row>
              <Col xs="4">
                <Col xs="6">
                  <img className={styles.cartImages} src={items.imageUrl} />
                </Col>
                <Col xs='6' className={styles.cartTitle} xs="6">{items.title}</Col>
              </Col>

              <Col xs="4">${items.price}</Col>
              <Col xs="4">{items.quantity}</Col>
            </Row>

          </Container>

       
        );
      })}
    </section>
  );
};

export default Cart;