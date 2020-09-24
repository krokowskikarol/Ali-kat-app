import React from "react";
import SearchResult from "./SearchResult/SearchResult";
import "./SearchList.css";
const searchList = (props) => {
  const maxSearchSize = 15; // limit of the search result size

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
          path={"images/" + item.index + ".png"}
          clicked={() => props.clicked(item)}
        />
      );
    });
  return <div className="SearchList">{filtered}</div>;
};

export default searchList;
