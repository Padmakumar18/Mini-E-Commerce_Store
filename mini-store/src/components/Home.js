import React from "react";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <div className="sliding">
        <p>Here sliding the image</p>
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
