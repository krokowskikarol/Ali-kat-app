import React from "react";
import SearchResult from "./SearchResult/SearchResult";

const searchList = (props) => {
  const maxSearchSize = 10; // limit of the search result size

  const filtered = props.data
    .filter((item) => {
      return item.index.includes(props.input);
    })
    .slice(0, maxSearchSize)
    .map((item) => {
      return (
        <SearchResult
          index={item.index}
          key={item.index}
          path={item.mainImg + item.index + ".png"}
          clicked={() => props.clicked(item)}
        />
      );
    });
  return <div>{filtered}</div>;
};

export default searchList;
