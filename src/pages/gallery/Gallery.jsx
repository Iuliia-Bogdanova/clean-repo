import style from"./style.module.scss";

const Gallery = () => {
    return (
        <main className={style.main}>
            <div className="container">
                <div className={style.box}>
                    <h1 className="logo logo-title">
                    отзывы питомцев
                    <br />
                    <span className="logo">Happy Cats</span>
                    </h1>
                    <div className={style.actions}>
                        <div className={style.prev}></div>
                        <div className={style.next}></div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Gallery;