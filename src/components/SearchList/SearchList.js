import React from "react";
import SearchResult from "./SearchResult/SearchResult";

const searchList = (props) => {
  const maxSearchSize = 10; // limit of the search result size

  const filter = props.data
    .filter((item) => {
      return item.name.includes(props.input);
    })
    .slice(0, maxSearchSize)
    .map((item) => {
      return (
        <SearchResult
          name={item.name}
          key={item.name}
          clicked={() => props.clicked(item)}
        />
      );
    });
  return <div>{filter}</div>;
};

export default searchList;
