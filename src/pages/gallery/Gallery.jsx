import IconButton from "../../components/IconButton/IconButton";
import style from"./style.scss";

const Gallery = () => {
    return (
      <main className="main">
        <div className="container">
          <div className="box">
            <div className="title">
              <h1 className="logo logo-title">
                отзывы питомцев
                <br />
                <span className="logo">Happy Cats</span>
              </h1>
            </div>

            <div className="actions">
              {/* <IconButton direction="left" />
              <IconButton direction="right" disable/> */}
              <div className="prev"></div>
              <div className="next"></div>
            </div>
          </div>
        </div>
      </main>
    );
}

export default Gallery;