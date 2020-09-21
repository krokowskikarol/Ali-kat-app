import React from "react";
import Drawing from "./Drawing/Drawing";
import FeatureList from "./FeatureList/FeatureList";
import "./DetailCard.css";

const detailCard = (props) => {
  const imgUrl = props.item.mainImg + props.item.index + ".png";
  return (
    <div className="DetailCard">
      <Drawing path={imgUrl} />
      <div className="header">
        <h2>{props.item.index}</h2>
        <button className="closeButton" onClick={props.close}>
          <b>X</b>
        </button>
      </div>

      <FeatureList features={["zagniatanie-", "przekładki"]} />
    </div>
  );
};

export default detailCard;
