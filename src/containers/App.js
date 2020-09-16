import React, { Component } from "react";
import DetailCard from "../components/DetailCard/DetailCard";
import SearchList from "../components/SearchList/SearchList";
import SearchBar from "../components/SearchBar/SearchBar";

import Data from "./data.json";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("data is loaded");
    this.state = {
      data: Data,
      input: "",
      selectedItem: {},
    };
  }

  inputChangeHandler = (event) => {
    this.setState({
      input: event.target.value.toUpperCase(),
    });

    console.log(this.state.input);
  };
  itemClickHandler = (item) => {
    this.setState({
      selectedItem: item,
    });
  };
  closeDetail = () => {
    this.setState({
      selectedItem: "",
    });
  };
  render() {
    if (this.state.data.length === 0) {
      this.setState({ data: Data });
    }

    let searchBar = (
      <SearchBar input={this.state.input} change={this.inputChangeHandler} />
    );
    let view = (
      <div>
        <h1>AliKat mobile Catalog</h1>
        {searchBar}
        <SearchList
          data={this.state.data}
          input={this.state.input}
          clicked={this.itemClickHandler}
        />
      </div>
    );
    if (this.state.selectedItem.name) {
      view = (
        <DetailCard item={this.state.selectedItem} close={this.closeDetail} />
      );
    }
    console.log(this.state);

    return <div className="App">{view}</div>;
  }
}

export default App;
