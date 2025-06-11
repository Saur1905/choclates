import React from "react";
import "../css/hero2.css";

import image from "../images/images/jar.png";
import image1 from "../images/images/fruit-1.png";
import image2 from "../images/images/fruit-2.png";
import image3 from "../images/images/fruit-3.png";
import image4 from "../images/images/fruit-4.png";
import image5 from "../images/images/fruit-5.png";
import image6 from "../images/images/fruit-6.png";
import image7 from "../images/images/fruit-7.png";

export const Hero2 = () => {
  return (
    <>
      <div className="hero2">
        <div className="herojarimg">
          <img src={image} alt="Chocolatecup"></img>
        </div>
        <div className="headding2">
          <h1>
            Indulge in Pure Chocolate Bliss.
            <br />
            <button className="btn2">Shop Now</button>
          </h1>

          <div className="herojarimg-layer2">
            <img className="img1" src={image1} alt="Chocolate"></img>
            <br />
            <img className="img2" src={image2} alt="Chocolate"></img>
            <br />
            <br />
            <img className="img3" src={image3} alt="Chocolate"></img>
            <br />
            <br />
            <img className="img4" src={image4} alt="Chocolate"></img>
            <br />
            <img className="img5" src={image5} alt="Chocolate"></img>
            <br />
            <img className="img6" src={image6} alt="Chocolate"></img>
            <br />
            <img className="img7" src={image7} alt="Chocolate"></img>
            <br />
          </div>
          <p className="hero2-para">
            02/04 <br />
            Experience the rich, velvety taste of our handcrafted chocolates,
            made with the finest ingredients.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero2;
