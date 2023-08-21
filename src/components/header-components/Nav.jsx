import { useState } from "react";
import "../../styles/style-nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

export const Nav = () => {
  const [isBuscadorOpen, setIsBuscadorOpen] = useState(false);

  const toggleBuscador = () => {
    setIsBuscadorOpen(!isBuscadorOpen);
  };

  return (
    <div className="superiorContainer">
      <div className="arriba">
        <a href="#" className="nav__logo">
          <img src="/src/images/logo.jpg" alt="Logo" />
        </a>

        <div className={`search ${isBuscadorOpen ? "open" : ""}`}>
          <input
            type="text"
            placeholder="¿Qué estás buscando?"
            className="search__input"
          />
          <button className="search__button" onClick={toggleBuscador}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        <div className="iconos">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
        <a href="">
          <button className="ingresar">Ingresar</button>
        </a>
      </div>
    </div>
  );
};
