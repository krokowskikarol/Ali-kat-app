import React from "react";
import "./SearchResult.css";
const searchResult = (props) => {
  return (
    <div className="SearchResult" onClick={props.clicked}>
      <img className="image" src={require("../../../" + props.path)} alt="x" />
      <h2> {props.index}</h2>
    </div>
  );
};

export default searchResult;
