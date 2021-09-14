import FeatherIcon from "feather-icons-react";
import logo from "../assets/logo.png";
import "./Navbar.css";
import { useState } from "react";
import categories from "../data/categories.json";
const SearchBar = () => {
  const [Toggle, setToggle] = useState(false);

  return (
    <div className="bg-white px-3 py-2 shadow fixed w-full flex items-center h-16 top-0 left-0 z-50">
      <div className=" flex w-full items-center justify-between">
        <a
          href="/"
          className="sidenav-header flex items-center w-80 cursor-pointer inline-flex"
        >
          <img src={logo} alt="logo" className="logo mr-3" />
          <div className="title text-lg font-medium">Tech Garage</div>
        </a>
        {/* <div className="search-section relative inline-block">
        <input
          type="text"
          className="w-72 border-2 focus:outline-none focus:border-gray-100 pl-8 py-1  pr-3 rounded-lg"
          placeholder="Search here"
        />
        <FeatherIcon icon="search" className="absolute search-icon" size="20" />
      </div> */}
        <div
          className="block lg:hidden ml-3 cursor-pointer"
          onClick={() => setToggle(!Toggle)}
        >
          {Toggle ? (
            <FeatherIcon icon="x" size="24" />
          ) : (
            <FeatherIcon icon="menu" size="24" />
          )}
        </div>
      </div>

      <div
        className={`fixed bg-white left-0 inset-y-0 max-h-screen w-72  z-index-100 transition  duration-200 ease-in-out lg:hidden transform togglenav overflow-y-auto ${
          Toggle ? "-translate-x-0" : " -translate-x-full"
        }`}
      >
        <div className="toggle-nav-header text-center p-6 flex items-center">
          <img src={logo} alt="logo" className="logo mr-3" />
             <span className="title text-lg font-medium">Techgarage</span>
          </div>
        <ul className="my-2 px-4">
          {categories.map((item, index) => (
            <li key={index} className="nav-link">
              <a
                href={item.link}
                className="block px-2 py-2 text-base font-semibold text-gray-500 transition duration-300 ease-in-out hover:text-gray-900"
              >
                {item.category}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
