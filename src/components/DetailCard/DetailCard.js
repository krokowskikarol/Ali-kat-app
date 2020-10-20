import React from "react";
import Drawing from "./Drawing/Drawing";
// import FeatureList from "./FeatureList/FeatureList";
import "./DetailCard.css";
import backIcon from "./arrow_back_icon.png";

const detailCard = (props) => {
  return (
    <div className="DetailCard">
      <Drawing
        rotateImg={props.rotateImg}
        rotationAngle={props.rotation}
        flipImg={props.flipImg}
        flipped={props.flipped}
        index={props.item.index}
      />

      <div className="header">
        <div className="name">
          <b>{props.item.index}</b>
        </div>
        <img
          className="closeButton"
          onClick={props.close}
          src={backIcon}
          alt="Back"
        />
      </div>

      {/* <FeatureList features={["zagniatanie", "przekładki"]} />   */}
    </div>
  );
};

export default detailCard;
