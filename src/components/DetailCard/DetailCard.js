import React from "react";
import Drawing from "./Drawing/Drawing";
import FeatureList from "./FeatureList/FeatureList";
import "./DetailCard.css";

const detailCard = (props) => {
  return (
    <div className="DetailCard">
      <Drawing />
      <div className="header">
        <h3>
          this is item: {props.name}
          <button className="closeButton" onClick={props.close}>
            <b>X</b>
          </button>
        </h3>
      </div>

      <FeatureList features={["zagniatanie", "przekładki"]} />
    </div>
  );
};

export default detailCard;
