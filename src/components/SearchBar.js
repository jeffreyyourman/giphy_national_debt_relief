import React from "react";
import "../styles/searchBar.css";

const SearchBar = ({ term, onTermChange, onSubmit }) => {
  return (
    <div className="searchDiv">
      <input
        className="inputStyles"
        type="text"
        value={term}
        onChange={e => onTermChange(e.target.value)}
      />
      <button className="submitBtn" onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default SearchBar;
