import React from "react";
import "./Drawing.css";
import rotateIcon from "./rotate-option.svg";
import flipIcon from "./flip-object.svg";
const drawing = (props) => {
  const style = [
    "image",

    props.flipped
      ? "flipped" + props.rotationAngle
      : "rotate" + props.rotationAngle,
  ];

  console.log(style);

  //const imgUrl = require("../../../../../katImages/" + props.index + ".png"); // for local files
  const imageUrl =
    "https://raw.githubusercontent.com/krokowskikarol/appData/master/katImages/" +
    props.index +
    ".png";
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
      <img className={style.join(" ")} src={imageUrl} alt={props.path} />
      {buttons}
    </div>
  );
};

export default drawing;
