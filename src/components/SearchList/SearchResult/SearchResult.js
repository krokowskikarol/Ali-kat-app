import React from "react";
import "./SearchResult.css";
const searchResult = (props) => {
  let imageUrl =
    "https://raw.githubusercontent.com/krokowskikarol/appData/master/katImages/150/" +
    props.index +
    ".jpg";

  return (
    <div className="SearchResult" onClick={props.clicked}>
      <img className="image" src={imageUrl} alt={props.index} />
      {/* <h2> {props.index}</h2> */}
      <svg viewBox="0 0 90 18">
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
          {props.index}
        </text>
      </svg>
    </div>
  );
};

export default searchResult;
