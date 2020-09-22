import React from "react";
import "./SearchBar.css";
const searchBar = (props) => {
  return (
    <input
      className="SearchBar"
      type="text"
      onChange={props.change}
      value={props.input}
      placeholder="szukaj"
    />
  );
};

export default searchBar;
