import React from "react";
import '../styles/searchbar.css'

const Search = ({ setkeyword }) => {
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          onChange={(e) => setkeyword(e.target.value)}
          className="search-input"
          placeholder="Search countries by Name and Capital "
        />
      </div>
    </>
  );
};

export default Search;
