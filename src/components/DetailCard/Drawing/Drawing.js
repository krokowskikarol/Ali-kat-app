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
    <div className="Drawing">
      <img className={style.join(" ")} src={imageUrl} alt={props.path} />

      <div className="changeItem">
        <div className="prev" onClick={props.prev}>
          <svg
            className="arrow prevArrow"
            version="1.1"
            viewBox="0 0 494.148 494.148"
            fill="#ffffff"
          >
            <title>arrow-left</title>
            <path
              d="M405.284,201.188L130.804,13.28C118.128,4.596,105.356,0,94.74,0C74.216,0,61.52,16.472,61.52,44.044v406.124
			c0,27.54,12.68,43.98,33.156,43.98c10.632,0,23.2-4.6,35.904-13.308l274.608-187.904c17.66-12.104,27.44-28.392,27.44-45.884
			C432.632,229.572,422.964,213.288,405.284,201.188z"
            />
          </svg>
        </div>
        <div className="separator"></div>
        <div className="next" onClick={props.next}>
          <svg
            className="arrow nextArrow"
            version="1.1"
            viewBox="0 0 494.148 494.148"
          >
            <title>arrow-right</title>
            <path
              d="M405.284,201.188L130.804,13.28C118.128,4.596,105.356,0,94.74,0C74.216,0,61.52,16.472,61.52,44.044v406.124
			c0,27.54,12.68,43.98,33.156,43.98c10.632,0,23.2-4.6,35.904-13.308l274.608-187.904c17.66-12.104,27.44-28.392,27.44-45.884
			C432.632,229.572,422.964,213.288,405.284,201.188z"
            />
          </svg>
        </div>
      </div>
      {buttons}
    </div>
  );
};

export default drawing;
