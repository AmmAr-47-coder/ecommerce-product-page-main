import Navbar from "./navbar";
import Contact from "./contant";
import { useState, createContext } from "react";
import "./index.css";
export let o = createContext(null);
export let cr = createContext(null);
export let sc = createContext(null);
function App() {
  const arr = [
    {
      nc: "Sneaker Company",
      n: "Fall Limited Edition Sneakers",
      d: `These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.`,
      p: "125.00",
      di: "50%",
      op: "$250.00",
    },
  ];
  const [cart, setCart] = useState([]);
  let oo = 0;
  cart.forEach((i) => {
    oo += i.q;
  });
  return (
    <div className="nnnn">
      <sc.Provider value={setCart}>
        <cr.Provider value={cart}>
          <o.Provider value={oo}>
            <Navbar />
            <Contact data={arr[0]} cart={cart} setCart={setCart} />
          </o.Provider>
        </cr.Provider>
      </sc.Provider>
    </div>
  );
}

export default App;
