import React from "react";
import "./Drawing.css";

const drawing = (props) => {
  return (
    <div className="Drawing">
      <h1>this is Drawing</h1>
      <p>{props.itemUrl}</p>
    </div>
  );
};

export default drawing;
