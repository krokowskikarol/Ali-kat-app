import React from "react";
import "./Drawing.css";

const drawing = (props) => {
  const style = ["image", "rotate" + props.angle];
  if (props.flipped) {
    style.push("flipped");
  }
  return (
    <div>
      <p>{style}</p>
      <img
        className={style.join(" ")}
        src={require("../../../" + props.path)}
        alt={props.path}
      />
      <button onClick={props.rotateImg}>rotate</button>
      <button onClick={props.flipImg}>flip</button>
    </div>
  );
};

export default drawing;
