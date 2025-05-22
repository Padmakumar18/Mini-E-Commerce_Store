import React from "react";
import Asus from './Images/Asus.png'
import Samsung from './Images/Samsung.png'
import Airpods from './Images/Airpods.png'
import Laptop from './Images/Laptop.png'
import Dress from './Images/Dress.png'
import Kitchen from './Images/Kitchen.jpg'
import Beauty from './Images/Beauty.png'
import Medicine from './Images/Medicine.jpg'
import Books from './Images/Books.jpg'
import Sports from './Images/Sports.png'
import Watch from './Images/Watch.png'
import SlideBook from './Images/Book.png'
import WiredEarphones from './Images/WiredEarphones.png'

import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <div className="sliding-carousel">
        <div className="carousel-track">
          <img src={Asus} alt="Slide 1" />
          <img src={Samsung} alt="Slide 2" />
          <img src={Airpods} alt="Slide 3" />
          <img src={SlideBook} alt="Slide 4" />

          <img src={WiredEarphones} alt="Slide 5" />
          <img src={Airpods} alt="Slide 3" />

          <img src={Asus} alt="Slide 1" />
          <img src={Samsung} alt="Slide 2" />
          <img src={Airpods} alt="Slide 3" />

          <img src={Asus} alt="Slide 1" />
          <img src={Samsung} alt="Slide 2" />
          <img src={Airpods} alt="Slide 3" />
        </div>
      </div>

      <div className="categories">
        <button><img src={Laptop} alt="Laptop" className="Laptop icon" /> <br></br> Electronics</button>
        <button><img src={Dress} alt="Laptop" className="Fashion icon" /> <br></br> Fashion</button>
        <button><img src={Kitchen} alt="Laptop" className="Kitchen icon" /> <br></br>Home & Kitchen</button>
        <button><img src={Beauty} alt="Laptop" className="Beauty icon" /> <br></br>Beauty & Personal Care</button>
        <button><img src={Medicine} alt="Laptop" className="Beauty icon" /> <br></br>Health & Wellness</button>
        <button><img src={Books} alt="Laptop" className="Books icon" /> <br></br>Books & Stationery</button>
        <button><img src={Sports} alt="Laptop" className="Sports icon" /> <br></br>Sports & Outdoors</button>
        <button><img src={Watch} alt="Laptop" className="Sports icon" /> <br></br>Jewelry & Watches</button>
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