import { NavLink } from "react-router-dom";

import "./style.scss";

const Header = () => {
    return (
      <header className="header">
        <nav className="nav">
          <div className="container">
            <div className="nav-row">
              
              <ul className="nav-list">
                <li className="nav-list__item">
                  <NavLink to="/" className="nav-list__link">
                    о нас
                  </NavLink>
                </li>

                <li className="nav-list__item">
                  <NavLink to="/gallery" className="nav-list__link">
                    галерея котиков
                  </NavLink>
                </li>

                <li className="nav-list__item">
                  <NavLink to="/contacts" className="nav-list__link">
                    контакты
                  </NavLink>
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