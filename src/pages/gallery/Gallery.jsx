import IconButton from "../../components/IconButton/IconButton";
import Slider from "../../components/Slider/Slider";

import photo_1 from "../../assets/photo/photo_1.jpg";
import photo_2 from "../../assets/photo/photo_2.jpg";
import photo_3 from "../../assets/photo/photo_3.jpg";
import photo_4 from "../../assets/photo/photo_4.jpg";
import photo_5 from "../../assets/photo/photo_5.jpg";
import photo_6 from "../../assets/photo/photo_6.jpg";
import photo_7 from "../../assets/photo/photo_7.jpg";
import photo_8 from "../../assets/photo/photo_8.jpg";
import photo_9 from "../../assets/photo/photo_9.jpg";
import photo_10 from "../../assets/photo/photo_10.jpg";

import "./style.scss";

const Gallery = () => {
    return (
      <main className="main">
        <div className="container">
          <div className="button-box">
            <div className="title">
              <h1 className="logo logo-title">
                отзывы питомцев
                <br />
                <span className="logo">Happy Cats</span>
              </h1>
            </div>
            <div className="actions">
              <IconButton direction="left" />
              <IconButton direction="right" />
            </div>
          </div>

            <Slider>
              <img src={photo_1} alt="Slide 1" />
              <img src={photo_2} alt="Slide 2" />
              <img src={photo_3} alt="Slide 3" />
              <img src={photo_4} alt="Slide 4" />
              <img src={photo_5} alt="Slide 5" />
              <img src={photo_6} alt="Slide 6" />
              <img src={photo_7} alt="Slide 7" />
              <img src={photo_8} alt="Slide 8" />
              <img src={photo_9} alt="Slide 9" />
              <img src={photo_10} alt="Slide 10" />
            </Slider>
        </div>
      </main>
    );
}

export default Gallery;