import React from "react";
import "./Drawing.css";
import rotateIcon from "./rotate-option.svg";
import flipIcon from "./flip-object.svg";
const drawing = (props) => {
  const style = [
    "image",

    props.flipped ? "flipped" + props.angle : null,

    "rotate" + props.angle,
  ];
  console.log(style);
  // if (props.flipped) {
  //   style.push("flipped");
  // }
  const buttons = (
    <div id="buttons">
      <div className="buttons" onClick={props.flipImg}>
        <img src={flipIcon} alt="flip" />
      </div>
      {!props.flipped ? (
        <div className="buttons" onClick={props.rotateImg}>
          <img src={rotateIcon} alt="rotate" />
        </div>
      ) : null}
    </div>
  );
  return (
    <div>
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
