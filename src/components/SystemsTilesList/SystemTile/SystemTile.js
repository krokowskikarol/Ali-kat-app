import React from "react";
import "./SystemTile.css";
const systemTile = (props) => {
  // const listOfSystems = props.systems.
  return (
    <div className="SystemTile" onClick={props.clicked}>
      <h4>{props.system}</h4>
    </div>
  );
};

export default systemTile;
