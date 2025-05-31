import Asus from './Images/Asus.png'
import Samsung from './Images/Samsung.png'
import Airpods from './Images/Airpods.png'
import SlideBook from './Images/Book.png'
import WiredEarphones from './Images/WiredEarphones.png'

import "./SlidingImages.scss";

function SlidingImages() {
  return (
    <div className="home">
      <p className='text'>Got your own picks</p>
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
    </div>
  );
}

export default SlidingImages;