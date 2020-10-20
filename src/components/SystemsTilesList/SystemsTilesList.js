import React from "react";
import "./SystemsTilesList.css";
import SystemTile from "./SystemTile/SystemTile";
const systemsTilesList = (props) => {
  const listOfSystems = props.systems.map((system) => {
    return (
      <SystemTile
        system={system}
        key={system}
        clicked={() => props.clicked(system)}
      />
    );
  });
  return <div className="SystemsTilesList">{listOfSystems}</div>;
};

export default systemsTilesList;
