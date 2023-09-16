import "./_base.css";

// import bg from "./"

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <div className="container">
          <div className="nav-row">
            <a href="./index.html" className="logo">
              <strong>Happy Cats</strong>
            </a>

            <button className="dark-mode-btn">
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
            </button>

            <ul className="nav-list">
              <li className="nav-list__item">
                <a
                  href="./index.html"
                  className="nav-list__link nav-list__link--active"
                >
                  Projects
                </a>
              </li>
              <li className="nav-list__item">
                <a href="./skills.html" className="nav-list__link">
                  Skills
                </a>
              </li>
              <li className="nav-list__item">
                <a href="./contacts.html" className="nav-list__link">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h1>Happy Cats</h1>
      <h2>
        В кошачьем хостеле жизнь котиков просто сказочная! Каждый день они
        наслаждаются комфортом и уютом этого места. Коты здесь получают отличный
        сервис - у них есть свои мягкие кроватки, игрушки и корм, подобранный
        специально для каждого из них.
      </h2>
      <h3>
        Котики проводят время вместе, играют и занимаются физическими
        упражнениями, что помогает им оставаться активными и здоровыми. Хозяева
        хостела всегда заботятся о котиках, обеспечивая им достаточно воздуха и
        свободы для развития и самовыражения.
      </h3>
      <h4>
        В хостеле также проводятся разные мероприятия и игры, чтобы поддерживать
        атмосферу веселья и развлечения. Котики вместе подвизаются на специально
        созданных для них площадках, соревнуются друг с другом, и просто
        наслаждаются обществом своих сородичей.
      </h4>
      <h5>
        Кошачий хостел – это не только место для проживания, но и возможность
        для котиков найти новых друзей и познакомиться с разными породами. Здесь
        они могут находиться в окружении своих собратьев круглосуточно, что
        создает атмосферу дружелюбия и взаимоподдержки.
      </h5>
      <h6>
        Жизнь котиков в кошачьем хостеле – это как постоянная вечеринка, где
        каждый день полон новых приключений и радостных моментов. Они получают
        ласку, внимание и любовь от сотрудников хостела, которые следят за их
        благополучием и счастьем.
      </h6>
      <p>
        Все это делает их пребывание в хостеле незабываемым и идеальным для
        маленьких хвостатых друзей.
      </p>
    </div>
  );
}

export default App;
