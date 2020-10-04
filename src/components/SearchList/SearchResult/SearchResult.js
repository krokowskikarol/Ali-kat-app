import React from "react";
import "./SearchResult.css";
const searchResult = (props) => {
  const url = require("../../../images/150/" + props.index + ".jpg");

  return (
    <div className="SearchResult" onClick={props.clicked}>
      <img className="image" src={url} alt="x" />
      <h2> {props.index}</h2>
    </div>
  );
};

export default searchResult;
