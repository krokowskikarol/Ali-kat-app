import React from "react";
import "./SearchBar.css";
const searchBar = (props) => {
  return (
    <div className="SearchBar">
      <input
        className="input"
        type="text"
        // list="data"
        onChange={props.change}
        value={props.input}
        placeholder="podaj index"
        autoFocus
      />
      <div className="clearButton" onClick={props.clearInput}>
        x
      </div>
      {/*zamiast x dodać jakaś ikonę*/}
      {/* <datalist id="data">
        {props.systems.map((item, key) => (
          <option key={key} value={item} />
        ))}
      </datalist> */}
    </div>
  );
};

export default searchBar;
