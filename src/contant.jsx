import "./contant.css";
import { useState, useRef, useEffect } from "react";

function Contact({ data, cart, setCart }) {
  const [qq, setQq] = useState(1);
  const [x, setx] = useState(1);
  const [y, sety] = useState(false);
  const [activeImg, setActiveImg] = useState(1); // الصورة الصغيرة المحددة
  const dd = useRef(null);
  const db = useRef(null);

  // تحديث صورة المعاينة
  useEffect(() => {
    if (dd.current) {
      dd.current.src = `/images/image-product-${x}.jpg`;
    }
  }, [x]);
  useEffect(() => {
    if (y) {
      db.current.classList.add("ff");
    } else {
      db.current.classList.remove("ff");
    }
  }, [y]);
  // إضافة للسلة
  function addto(n, p, q) {
    const index = cart.findIndex((item) => item.p === p);
    if (index === -1) {
      setCart([...cart, { n, p, q, t: (q * p).toFixed(2) }]);
    } else {
      const newCart = [...cart];
      newCart[index].q += q;
      newCart[index].t = (newCart[index].q * p).toFixed(2);
      setCart(newCart);
    }
  }

  return (
    <div>
      <div className="con">
        {/* الصور الصغيرة والرئيسية */}
        <div className="img">
          <div
            className="imgm"
            onClick={() => {
              sety(true);
            }}
          >
            <img
              className="imgset"
              src={`/images/image-product-${activeImg}.jpg`}
              alt=""
            />
          </div>
          <div className="imgc">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`m ${activeImg === i ? "selected" : ""}`}
                style={{
                  border:
                    activeImg === i
                      ? "2px solid orange"
                      : "2px solid transparent",
                  borderRadius: "10px",
                }}
              >
                <img
                  src={`/images/image-product-${i}-thumbnail.jpg`}
                  alt=""
                  onClick={() => setActiveImg(i)}
                />
              </div>
            ))}
          </div>
        </div>
        {/* النص والمعلومات */}
        <div className="text">
          <div className="tex">
            <h4>{data.nc}</h4>
            <h1>{data.n}</h1>
            <p>{data.d}</p>
            <h3>
              ${data.p}
              <span>{data.di}</span>
            </h3>
            <h5>{data.op}</h5>
          </div>

          {/* الكمية والزر */}
          <div className="btn">
            <div className="qq">
              <button
                className="q"
                onClick={() => {
                  if (qq > 1) setQq(qq - 1);
                }}
              >
                −
              </button>
              <p>{qq}</p>
              <button className="e" onClick={() => setQq(qq + 1)}>
                +
              </button>
            </div>
            <div className="fff">
              <button className="gg" onClick={() => addto(data.n, data.p, qq)}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="w" ref={db}>
          <div className="photo">
            <button
              className="lk"
              onClick={() => {
                sety(false);
              }}
            ></button>
            <button
              className="b"
              onClick={() => {
                if (x > 1) setx(x - 1);
              }}
            ></button>
            <div className="pop">
              <img ref={dd} src="/images/image-product-1.jpg" alt="" />
            </div>
            <button
              className="n"
              onClick={() => {
                if (x < 4) setx(x + 1);
              }}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
