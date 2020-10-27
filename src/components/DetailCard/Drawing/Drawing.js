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
    <div className="buttons">
      <div id="buttonRot" className="button" onClick={props.rotateImg}>
        <img src={rotateIcon} alt="rotate" />
      </div>
      <div id="buttonFlip" className="button" onClick={props.flipImg}>
        <img src={flipIcon} alt="flip" />
      </div>
    </div>
  );
  return (
    <div className="Draving">
      <img className={style.join(" ")} src={imageUrl} alt={props.path} />
      {buttons}
    </div>
  );
};

export default drawing;
