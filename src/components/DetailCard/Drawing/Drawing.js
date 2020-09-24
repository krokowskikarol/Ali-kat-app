import React from "react";
import "./Drawing.css";

const drawing = (props) => {
  return (
    <div className="Drawing">
      <img
        className="image"
        src={require("../../../" + props.path)}
        alt={props.path}
      />
    </div>
  );
};
export default drawing;
