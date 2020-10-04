import React from "react";
import SearchResult from "./SearchResult/SearchResult";
import "./SearchList.css";
const searchList = (props) => {
  //const maxSearchSize = 15; // limit of the search result size

  const filteredList = props.data
    .filter((item) => {
      return item.index.includes(props.input);
    })

    .map((item) => {
      return (
        <SearchResult
          index={item.index}
          key={item.index}
          clicked={() => props.clicked(item)}
        />
      );
    });
  return (
    <div className="SearchList">
      <p>wyswietlono {filteredList.length} elementy</p>
      {filteredList}
    </div>
  );
};

export default searchList;
