import React from "react";
import "./SearchBar.css";
const searchBar = (props) => {
  return (
    <div>
      <input
        className="SearchBar"
        type="search"
        // list="data"
        onChange={props.change}
        value={props.input}
        placeholder="podaj index"
        autoFocus
      />
      {/* <datalist id="data">
        {props.systems.map((item, key) => (
          <option key={key} value={item} />
        ))}
      </datalist> */}
    </div>
  );
};

export default searchBar;
