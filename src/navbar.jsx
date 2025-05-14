import "./navbar.css";
import { useRef, useContext, useEffect, useState } from "react";
import { o, cr, sc } from "./App";
function Navbar() {
  const cRef = useRef(null);
  const dRef = useRef(null);
  const ddRef = useRef(null);
  const dddRef = useRef(null);
  const ddddRef = useRef(null);
  const ddddddRef = useRef(null);
  const dddddRef = useRef(null);
  const j = useRef(null);
  const j2 = useRef(null);
  const value = useContext(o);
  let Cart = useContext(cr);
  let setCart = useContext(sc);
  function di() {
    cRef.current.classList.toggle("ff");
  }
  const [cartMessage, setCartMessage] = useState("");
  const [cartMessagep, setCartMessagep] = useState("");
  const [cartMessageq, setCartMessageq] = useState("");
  const [cartMessaget, setCartMessaget] = useState("");
  useEffect(() => {
    if (Cart.length === 0) {
      setCartMessage("Your cart is empty");
      dRef.current.classList.add("fffs");
      ddRef.current.classList.add("fffs");
      dddRef.current.classList.add("fffs");
      ddddRef.current.classList.add("fffs");
      dddddRef.current.classList.add("fffs");
      ddddddRef.current.classList.add("fffs");
      setCartMessagep("");
      setCartMessageq("");
      setCartMessaget("");
    } else {
      dRef.current.classList.remove("fffs");
      ddRef.current.classList.remove("fffs");
      dddRef.current.classList.remove("fffs");
      ddddRef.current.classList.remove("fffs");
      dddddRef.current.classList.remove("fffs");
      ddddddRef.current.classList.remove("fffs");
      setCartMessage(Cart[0].n);
      setCartMessagep(Cart[0].p);
      setCartMessageq(Cart[0].q);
      setCartMessaget(Cart[0].t);
    }
  }, [Cart]);
  return (
    <div>
      <div className="header">
        <span
          className="min"
          ref={j2}
          onClick={() => {
            j.current.classList.toggle("ghu");
            j2.current.classList.toggle("ghh");
          }}
        ></span>
        <h1>Sneaker</h1>
        <div className="k" ref={j}>
          <span className="span">
            <a href="">Collections</a>
          </span>
          <span className="span">
            <a href="">Men</a>
          </span>
          <span className="span">
            <a href="">Women</a>
          </span>
          <span className="span">
            <a href="">About</a>
          </span>
          <span className="span">
            <a href="">Contact</a>
          </span>
        </div>
        <div className="g">
          <nav className="cart" onClick={di}>
            <div className="qqq">{value}</div>
          </nav>
          <nav className="av"></nav>
        </div>
      </div>
      <div className="cartm" ref={cRef}>
        <h2>Cart</h2>
        <div className="it">
          <div ref={dRef} className="imgcd">
            <img src="images/image-product-1-thumbnail.jpg" alt="" />
          </div>
          <div className="kf">
            <h3>{cartMessage}</h3>
            <span ref={dddddRef}>${cartMessagep}</span>
            <span ref={ddRef}>x{cartMessageq}</span>
            <span ref={ddddddRef}>${cartMessaget}</span>
          </div>
          <button
            className="btj"
            ref={dddRef}
            onClick={() => setCart([])}
          ></button>
        </div>
        <button className="hhh" ref={ddddRef}>
          Checkout
        </button>
      </div>
    </div>
  );
}
export default Navbar;
