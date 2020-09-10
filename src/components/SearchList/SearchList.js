import React from "react";
import SearchResult from "./SearchResult/SearchResult";

const searchList = (props) => {
  const filter = props.data
    .filter((item) => {
      return item.name.includes(props.input);
    })
    .map((item) => {
      return (
        <SearchResult
          name={item.name}
          key={item.name}
          clicked={() => props.clicked(item.name)}
        />
      );
    });

  return <div>{filter}</div>;
};

export default searchList;
