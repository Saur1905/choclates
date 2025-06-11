import React from "react";
import "../Styles/Menubar.css";
import Img1 from "../images/images/slide1-menu.png";
import Img2 from "../images/images/slide2-menu.png";
import Img3 from "../images/images/slide3-menu.png";
import Img4 from "../images/images/slide4-menu.png";
const Menubar = () => {
  return (
   <>
    <div className="menubar">

      <div className="images">
        <img src={Img1} alt="" />
        <img src={Img2} alt="" />
        <img src={Img3} alt="" />
        <img src={Img4} alt="" />
      </div>

      <div className="menubarpara">

        <p>Lorem ipsum dolor</p>
        <p>molestias ducimus </p>
        <p>Lorem  sit</p>
        <p>cumque sit omnis.</p>

      </div>

    </div>
    </>
  );
};
export default Menubar;
