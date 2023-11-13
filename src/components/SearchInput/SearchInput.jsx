// import React from 'react'
import searchIcon from '../../assets/search-icon.svg';

const SearchInput = () => {
  return (
    <>
      <span className="searchBar-container">
        <input
          id="searchBar"
          type="search"
          role="searchbox"
          placeholder="Search"
          // value={value || ''}
          // onChange={(e) => {
          //   setValue(e.target.value);
          //   handleChange(e.target.value);
          // }}
        />
        <img src={searchIcon} alt="search icon" className="search-icon" />
      </span>
    </>
  );
};

export default SearchInput;
