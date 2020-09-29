import React from "react";
import "./Drawing.css";
import rotateIcon from "./rotate-option.svg";
import flipIcon from "./flip-object.svg";
const drawing = (props) => {
  const style = [
    "image",

    props.flipped ? "flipped" + props.angle : "rotate" + props.angle,
  ];

  console.log(style);

  const buttons = (
    <div id="buttons">
      <div className="buttons" onClick={props.flipImg}>
        <img src={flipIcon} alt="flip" />
      </div>

      <div className="buttons" onClick={props.rotateImg}>
        <img src={rotateIcon} alt="rotate" />
      </div>
    </div>
  );
  return (
    <div id="container">
      <img
        className={style.join(" ")}
        src={require("../../../" + props.path)}
        alt={props.path}
      />
      {buttons}
    </div>
  );
};

export default drawing;
