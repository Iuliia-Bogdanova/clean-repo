import "./style.scss";

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
            <div className="container">
                <div className="nav-row">
                <ul className="nav-list">
                    <li className="nav-list__item">
                    <a href="" className="nav-list__link nav-list__link">
                        о нас
                    </a>
                    </li>
                    <li className="nav-list__item">
                    <a href="" className="nav-list__link--active">
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