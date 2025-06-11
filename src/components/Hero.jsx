import React from "react";

import "../css/hero.css";

import image from "../images/images/chocolate-cup.png";
import image1 from "../images/images/choco1.png";
import image2 from "../images/images/choco2.png";
import image3 from "../images/images/choco3.png";
import image4 from "../images/images/choco4.png";
import image5 from "../images/images/choco5.png";

export const Hero = () => {
  return (
    <>
     <div className="hero">
            <div className="herocupimg">
              <img src={image} alt="Chocolatecup"></img>
            </div>
            
            <div className="headding">
              <h1>
                Indulge in Pure Chocolate Bliss.
                <br />
                <button className="btn1">Shop Now</button>
              </h1>
    
              <div className="herocupimg-layer">
                <img className="img1-1" src={image1} alt="Chocolate"></img>
                <br />
                <img className="img1-2" src={image2} alt="Chocolate"></img>
                <br />
                <br />
                <img className="img1-3" src={image3} alt="Chocolate"></img>
                <br />
                <br />
                <img className="img1-4" src={image4} alt="Chocolate"></img>
                <br />
                <img className="img1-5" src={image5} alt="Chocolate"></img>
                <br />
              </div>
              <p className="hero-para">
                01/04 <br />
                Experience the rich, velvety taste of our handcrafted chocolates,
                made with the finest ingredients.
              </p>
            </div>
          </div>
    </>
  );
};

export default Hero;
