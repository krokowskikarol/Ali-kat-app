import React from "react";

const searchResult = (props) => {
  return (
    <div>
      <p onClick={props.clicked}>this is Search Result of name {props.name}</p>
    </div>
  );
};

export default searchResult;
