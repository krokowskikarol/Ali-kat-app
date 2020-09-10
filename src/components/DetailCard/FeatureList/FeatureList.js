import React from "react";
import Feature from "./Feature/Feature";
import "./FeatureList.css";

const featureList = (props) => {
  const list = props.features.map((item) => {
    return (
      <Feature
        name={item}
        // key={item.name}
        // clicked={() => props.clicked(item.name)}
      />
    );
  });

  return (
    <div className="FeatureList">
      this is feature list:
      {list}
    </div>
  );
};

export default featureList;
