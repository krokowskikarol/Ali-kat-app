import React from "react";

const searchBar = (props) => {
  return (
    <div>
      <input onChange={props.change} value={props.input} />
      <p>Input :{props.input}</p>
    </div>
  );
};

export default searchBar;
