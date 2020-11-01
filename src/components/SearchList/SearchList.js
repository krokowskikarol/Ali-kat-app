import React from "react";
import SearchResult from "./SearchResult/SearchResult";
import "./SearchList.css";
const searchList = (props) => {
  const searchResultLits = props.searchList.map((item) => {
    return (
      <SearchResult
        index={item.index}
        key={item.index}
        clicked={() => props.clicked(item)}
      />
    );
  });

  return <div className="SearchList">{searchResultLits}</div>;
};

export default searchList;
