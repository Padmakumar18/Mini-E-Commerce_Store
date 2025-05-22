import React from "react";
import Asus from './Images/Asus.png'
import Samsung from './Images/Samsung.png'
import Airpods from './Images/Airpods.png'
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <div className="sliding-carousel">
        <div className="carousel-track">
          <img src={Asus} alt="Slide 1" />
          <img src={Samsung} alt="Slide 2" />
          <img src={Airpods} alt="Slide 3" />
          <img src={Asus} alt="Slide 1" />
          <img src={Samsung} alt="Slide 2" />
          <img src={Airpods} alt="Slide 3" />
          <img src={Asus} alt="Slide 1" />
          <img src={Samsung} alt="Slide 2" />
          <img src={Airpods} alt="Slide 3" />
          <img src={Asus} alt="Slide 1" />
          <img src={Samsung} alt="Slide 2" />
          <img src={Airpods} alt="Slide 3" />
          {/* <img src="https://via.placeholder.com/300x150?text=Image+4" alt="Slide 4" /> */}
        </div>
      </div>

      <div className="categories">
        <button>Electronics</button>
        <button>Fashion</button>
        <button>Home & Kitchen</button>
        <button>Beauty & Personal Care</button>
        <button>Health & Wellness</button>
        <button>Books & Stationery</button>
        <button>Sports & Outdoors</button>
        <button>Jewelry & Watches</button>
      </div>

      <div className="randomProducts">
        <div className="sliding">
          <p>Random products</p>
        </div>
      </div>
    </div>
  );
}

export default Home;