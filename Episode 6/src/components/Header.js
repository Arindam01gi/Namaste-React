import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [btnName, setBtnName] = useState("Log in");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Log in"
                ? setBtnName("Log out")
                : setBtnName("Log in");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
