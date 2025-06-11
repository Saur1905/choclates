import React from "react";
import "../css/header.css";
import { Link } from "react-router-dom";
import Menu from "../Pages/Menu";
import { useState } from "react";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <h1>Chocolate</h1>
        </div>

        <nav>
          <Link to={"/"} className="anchor">
            {" "}
            Home
          </Link>
          <Link to={"/about"} className="anchor">
            {" "}
            About
          </Link>
          <Link to={"/contact"} className="anchor">
            {" "}
            Contact
          </Link>
          <Link to={"/services"} className="anchor">
            {" "}
            Services
          </Link>
        </nav>
        <div className="link">
          <Link to={"/Menubar"} className="menubarlogo">
            <i class="fa-solid fa-bars-staggered"></i>
          </Link>
        </div>
        <div className="menu">
          {" "}
          <button onClick={() => setMenuOpen(!menuOpen)} className="menubtn">
            Menu
          </button>
          
        </div>
        {menuOpen && <Menu />}

        <div className="btn_form">
          <button className="btn_Login">Log In</button>
          <button className="btn_Signup">SignUp</button>
        </div>
      </div>
    </header>
  );
};
export default Header;
