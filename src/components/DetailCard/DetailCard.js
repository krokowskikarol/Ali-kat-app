import React from "react";
import Drawing from "./Drawing/Drawing";
// import FeatureList from "./FeatureList/FeatureList";
import "./DetailCard.css";

const detailCard = (props) => {
  return (
    <div className="DetailCard">
      <Drawing
        rotateImg={props.rotateImg}
        rotationAngle={props.rotation}
        flipImg={props.flipImg}
        flipped={props.flipped}
        index={props.item.index}
        next={props.nextItem}
        prev={props.prevItem}
      />

      <div className="header">
        <div className="name">
          <b>{props.item.index}</b>
        </div>
        <div className="closeButton" onClick={props.close}>
          <svg version="1.1" viewBox="0 0 24 24">
            <title>arrow-back</title>
            <path d="M12 9.059v-2.559c0-0.256-0.098-0.512-0.293-0.708-0.195-0.195-0.451-0.292-0.707-0.292s-0.512 0.097-0.707 0.292l-6.293 6.208 6.293 6.207c0.195 0.195 0.451 0.293 0.707 0.293s0.512-0.098 0.707-0.293 0.293-0.452 0.293-0.707v-2.489c2.75 0.068 5.755 0.566 8 3.989v-1c0-4.633-3.5-8.443-8-8.941z"></path>
          </svg>
        </div>
      </div>

      {/* <FeatureList features={["zagniatanie", "przekładki"]} />   */}
    </div>
  );
};

export default detailCard;
