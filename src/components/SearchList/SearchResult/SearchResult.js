import React from "react";

const searchResult = (props) => {
  return (
    <div>
      <p onClick={props.clicked}>this is Search Result of name {props.index}</p>
      <img
        style={{ height: "100px" }}
        src={require("../../../" + props.path)}
      />
    </div>
  );
};

export default searchResult;
