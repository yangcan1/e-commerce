import React, { useRef, useState } from "react";
import "./Navbar.css";

import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";

export const Navbar = () => {

    const inputRef = useRef(null)
    const [data, setData] = useState([]);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPING</p>
      </div>
      <ul className="nav-menu">
        <li>
          Shop <hr />{" "}
        </li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
      <div>
        <input ref = {inputRef} type="text" />
        <button onClick={() => {setData([...data,inputRef.current.value])}}>Submit</button>
        {data.map((item) => {return <h2>{item}</h2>})}
      </div>

    </div>
  );
};

export default Navbar;
