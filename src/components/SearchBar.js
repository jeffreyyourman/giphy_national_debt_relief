import React from "react";

const SearchBar = ({ term, onTermChange, onSubmit }) => {
  return (
    <div>
      <input
        type="text"
        value={term}
        onChange={(e)=> onTermChange(e.target.value)} 
      /> 
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default SearchBar;