import React, { useState } from "react";
import "../css/crausel.css";

const cards = [
  {
    img: "https://cioccolato.in/wp-content/uploads/2025/04/ChatGPT-Image-Apr-24-2025-02_34_41-AM.png",
    title: "Dark Chocolate",
    desc: "Rich, intense, and perfectly bittersweet.",
  },
  {
    img: "https://totallychocolate.com/wp-content/uploads/2023/02/WhiteMilkChocolate_11zon.jpg",
    title: "Milk Chocolate",
    desc: "Creamy, smooth, and delightfully sweet.",
  },
  {
    img: "https://static.vecteezy.com/system/resources/previews/026/559/108/non_2x/white-chocolate-bar-white-isolated-background-foodgraphy-ai-generated-free-photo.jpg",
    title: "White Chocolate",
    desc: "Sweet, velvety, and irresistibly smooth.",
  },
];

export const Crausel = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? cards.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === cards.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="slider-container">
      <button className="slider-btn left" onClick={prevSlide}>
        &lt;
      </button>
      <div className="slider-card">
        <img src={cards[current].img} alt={cards[current].title} />
        <h3>{cards[current].title}</h3>
        <p>{cards[current].desc}</p>
      </div>
      <button className="slider-btn right" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Crausel;
