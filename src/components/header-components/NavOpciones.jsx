//import React from "react";
import { useState } from "react";
import "../../styles/style-navOpciones.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

export const NavOpciones = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container">
      <FontAwesomeIcon
        icon={isMenuOpen ? faTimes : faBars}
        className="header__toggle"
        id="header-toggle"
        onClick={toggleMenu}
      />
      <div className={`nav ${isMenuOpen ? "active" : ""}`} id="nav-menu">
        <div className="nav__content bd-grid">
          <div className="nav__menu">
            <div className="logo">
              <a href="#" className="nav__logo">
                <img
                  src="/src/images/logo.jpg"
                  alt="logo"
                  className="nav__img"
                />
              </a>

              <a href="#" className="nav__logo">
                <h3 className="marca">Sexx.sn</h3>
              </a>
            </div>

            <ul className="nav__list">
              <li className="nav__item dropdown">
                <a href="#" className="nav__link dropdown__link">
                  Jueguetes Sexuales
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="dropdown__icon"
                  />
                </a>

                <ul className="dropdown__menu">
                  <li className="dropdown__item">
                    <a href="#" className="nav__link">
                      Vibradores
                    </a>
                  </li>
                  <li className="dropdown__item">
                    <a href="#" className="nav__link">
                      Estimuladores
                    </a>
                  </li>
                  <li className="dropdown__item">
                    <a href="#" className="nav__link">
                      Amarres
                    </a>
                  </li>
                  <li className="dropdown__item">
                    <a href="#" className="nav__link">
                      Consoladores
                    </a>
                  </li>
                  <li className="dropdown__item">
                    <a href="#" className="nav__link">
                      Succionadores
                    </a>
                  </li>
                  <li className="dropdown__item">
                    <a href="#" className="nav__link">
                      Anales{" "}
                    </a>
                  </li>
                  <li className="dropdown__item">
                    <a href="#" className="nav__link">
                      Bomaba de vacio
                    </a>
                  </li>
                  <li className="dropdown__item">
                    <a href="#" className="nav__link">
                      Masturbadores
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav__item dropdown">
                <a href="#" className="nav__link dropdown__link">
                  Lenceria y disfrazes
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="dropdown__icon"
                  />
                </a>

                <ul className="dropdown__menu">
                  <li className="dropdown__item">
                    <a href="#" className="nav__link">
                      Lencerias
                    </a>
                  </li>
                  <li className="dropdown__item">
                    <a href="#" className="nav__link">
                      Conjuntos
                    </a>
                  </li>
                  <li className="dropdown__item">
                    <a href="#" className="nav__link">
                      Medias
                    </a>
                  </li>
                  <li className="dropdown__item">
                    <a href="#" className="nav__link">
                      {" "}
                      Portaligas{" "}
                    </a>
                  </li>
                  <li className="dropdown__item">
                    <a href="#" className="nav__link">
                      Disfrazes
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Lubricantes
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Juegos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
