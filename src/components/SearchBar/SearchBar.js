import React from "react";
import "./SearchBar.css";
const searchBar = (props) => {
  return (
    <div className="SearchBar">
      <input
        className="input"
        type="text"
        onChange={props.change}
        value={props.input}
        placeholder="podaj index"
        autoFocus
      />
      {/* display clearButton only if there is something to clear in input field */}
      {props.input !== "" ? (
        <div className="clearButton" onClick={props.clearInput}>
          <div className="arrowPointLeft"></div>x
        </div>
      ) : null}
    </div>
  );
};

export default searchBar;
