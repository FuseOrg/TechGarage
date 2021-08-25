import FeatherIcon from "feather-icons-react";
const SearchBar = ()=>{
    return (
        <div className="search-section relative inline-block">
        <input type="text" className="border-2 rounded-lg focus:outline-none focus:border-gray-100 pl-8 py-1 pr-3" placeholder="Search here"/>
        <FeatherIcon
        icon="search"
        className="absolute search-icon"
        size="20"
      />
        </div>
    )
}

export default SearchBar