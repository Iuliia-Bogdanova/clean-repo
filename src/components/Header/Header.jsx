import "./style.scss";

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
            <div className="container">
                <div className="nav-row">
                {/* <button className="dark-mode-btn">
                <img
                    src="./assets/icons/sun.svg"
                    alt="Light mode"
                    className="dark-mode-btn__icon"
                ></img>
                <img
                    src="./assets/icons/moon.svg"
                    alt="Dark mode"
                    className="dark-mode-btn__icon"
                ></img>
                </button> */}

                <ul className="nav-list">
                    <li className="nav-list__item">
                    <a href="" className="nav-list__link nav-list__link--active">
                        о нас
                    </a>
                    </li>
                    <li className="nav-list__item">
                    <a href="" className="nav-list__link">
                        галерея котиков
                    </a>
                    </li>
                    <li className="nav-list__item">
                    <a href="" className="nav-list__link">
                        контакты
                    </a>
                    </li>
                </ul>
                <h2 className="logo">Happy Cats</h2>
                </div>
            </div>
            </nav>
        </header>
    );
}

export default Header;