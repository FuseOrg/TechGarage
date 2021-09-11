import FeatherIcon from "feather-icons-react";
import logo from "../assets/logo.svg";
import './Navbar.css'
import { useState } from "react";
const SearchBar = () => {
  const [Toggle, setToggle] = useState(false);
  return (
    <div className="bg-white px-2 py-2 shadow fixed w-full flex items-center h-14 top-0 left-0 z-50">
      <div className=" flex w-full items-center justify-between">
      <a href="/" className="sidenav-header flex items-center w-80 cursor-pointer">
        <img src={logo} alt="logo" className="logo mr-3" />
        <div className="title text-lg">Tech Garage</div>
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
        className="block md:hidden ml-3 cursor-pointer"
        onClick={() => setToggle(!Toggle)}
      >
        {Toggle ? (
          <FeatherIcon icon="x" size="24" />
        ) : (
          <FeatherIcon icon="menu" size="24" />
        )}
      </div>
      </div>
      
       <div className={`fixed bg-white left-0 inset-y-0 max-h-screen w-72  z-50 transition  duration-200 ease-in-out md:hidden transform togglenav ${Toggle? '-translate-x-0' : ' -translate-x-full'}`}>
         <div className="toggle-nav-header text-center p-6">
            Techgarage
         </div>
       </div>
     
    </div>
  );
};

export default SearchBar;
