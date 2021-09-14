//import logo from '../assets/link.png'
import "./HeaderSection.css";
import { useState } from 'react';
import Data from "../data/data.json";

const HeaderSection = () => {
  const [filterQuery, setfilterQuery] = useState([]);
  const [searchValue, setsearchValue] = useState([]);

  const searchFilter = (event) => {
    const searchQuery = event.target.value;
    setsearchValue(searchQuery);
    if (searchQuery.length > 0) {
      const filterData = Data.filter((item) => {
        return (
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.Category.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
      setfilterQuery(filterData);
    }
  };

  return (
    <header className="w-full bg-secondary py-6 lg:py-20 mt-16">
      <div className="header_container flex flex-col justify-center items-center sm:w-11/12 mx-auto ">
        {/* <div className="image_conatiner">
                 <img src={logo} alt="logo"/>
             </div> */}
        <div className="header_description flex flex-col text-center mx-5">
          <h1 className="text-2xl lg:text-5xl mb-2 lg:mb-4 text-white">
            Free Resources for Everyone
          </h1>
          <p className="text-sm lg:text-base mb-4 text-white">
            {" "}
            This is a great place to start exploring resources that are free to
            use.
          </p>

          <div className="searchContainer relative">
            <div className="searchInput w-full mb-2 ">
              <input
                type="text"
                placeholder="Search"
                className="p-2 lg:p-4 rounded-lg text-sm mb-1  w-full"
                onChange={searchFilter}
              />
            </div>

            {filterQuery.length > 0 && searchValue.length > 0 && (
              <div className="searchResult bg-white rounded-lg absolute w-full h-48 overflow-x-hidden overflow-y-auto">
                <ul className="text-left py-2">
                  {filterQuery.map((item, index) => {
                    return (
                      <li key={index}>
                        <a
                          href={item.link}
                          className="p-3 block hover:bg-gray-200 transition-all duration-300 text-sm"
                        >
                          {item.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
