import Slider from "../../components/Slider/Slider";
// import sliderData from "../../sliderData.json";
import "./style.scss";

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

const sliderData = [
  {
    name: "нюша",
    text: "красотка",
    img: photo_1
  },
  {
    name: "мистер кот денис",
    text: "зайка",
    img: photo_2
  },
  {
    name: "гранпи",
    text: "пухляш",
    img: photo_3,
  },
  {
    name: "люся веня",
    text: "спять",
    img: photo_4
  },
  {
    name: "котойта котек",
    text: "лежить",
    img: photo_5
  },
  {
    name: "суслинька",
    text: "с игрушечками",
    img: photo_6
  },
  {
    name: "снова люся веня",
    text: "снова спять",
    img: photo_7
  },
  {
    name: "суслинька",
    text: "в уединении",
    img: photo_8
  },
  {
    name: "люся лотя",
    text: "тоже спять",
    img: photo_9
  },
  {
    name: "суслинька",
    text: "самый прекрасный в мире котинька",
    img: photo_10
  }
];

console.log (sliderData);

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
          </div>

          <Slider data={sliderData} />

        </div>
      </main>
    );
}

export default Gallery;