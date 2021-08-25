import FeatherIcon from "feather-icons-react";
const SearchBar = ()=>{
    return (
        <div className="search-section relative inline-block w-full">
        <input type="text" className="w-full border-2 focus:outline-none focus:border-gray-100 pl-8 py-2  pr-3 " placeholder="Search here"/>
        <FeatherIcon
        icon="search"
        className="absolute search-icon"
        size="20"
      />
        </div>
    )
}

export default SearchBar