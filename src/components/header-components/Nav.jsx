import { useState } from "react";
// import "../../styles/style-nav.css";
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
    <div className="bg-[#ede5e50] p-4 md:p-8 border-b border-[#ccc] border-solid">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center">
        <a href="#">
          <img
            src="/src/images/logo.jpg"
            alt="Logo"
            className="w-24 h-auto rounded-full transform transition-all duration-300 ease-in-out hover:scale-110 md:w-32"
          />
        </a>

        <div
          className={`search ${
            isBuscadorOpen ? "open" : ""
          } flex items-center justify-center w-full md:w-auto mt-4 md:mt-0 md:max-w-[500px]`}
        >
          <input
            type="text"
            placeholder="¿Qué estás buscando?"
            className="p-2 w-full md:w-auto border border-solid border-[#ccc] rounded-md"
          />
          <button
            className="bg-[#6220fb] text-[#fff] border-none rounded p-2 ml-2 cursor-pointer md:ml-4"
            onClick={toggleBuscador}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <div className="flex align-center sm:pr-0 p-2 ">
            <button
              type="button"
              className="inline-block px-6 py-3 mr-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-pink-700 hover:text-pink-200 hover:shadow-lg active:opacity-85"
            >
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
