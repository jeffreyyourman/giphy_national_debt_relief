import React from "react";
import "../styles/searchBar.css";

const SearchBar = ({ term, onTermChange, onSubmit }) => {
  return (
    <div className="searchDiv">
      <label className="inputLabel">
        <input
          className="inputStyles"
          placeholder="Please type in a key word or phrase"
          type="text"
          value={term}
          onChange={e => onTermChange(e.target.value)}
        />
      </label>
      <input className="submitBtn" type="submit" value="Search" onClick={onSubmit}/>
    </div>
  );
};

export default SearchBar;
