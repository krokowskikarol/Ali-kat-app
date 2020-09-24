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
      imgRotation: 0,
      imgFlip: false,
    };
  }

  //create json from files from file nemes
  createJSONFromFileNames = () => {
    const list = "";
    const parsed = list
      .split(" ")
      .filter((item) => {
        return item.length > 0;
      })
      .map((e) => {
        return { index: e.slice(0, -4), features: [] };
      });
    const result = JSON.stringify(parsed, null, 2);
    return result;
  };
  //--------------------------------------------------------------------

  inputChangeHandler = (event) => {
    this.setState({
      input: event.target.value.toUpperCase(),
    });

    console.log(this.state.input);
  };
  rotateImg = () => {
    const currentRotation = this.state.imgRotation;
    this.setState({ imgRotation: (currentRotation + 90) % 360 });
  };
  flipImg = () => {
    const currentFlip = this.state.imgFlip;
    this.setState({ imgFlip: !currentFlip });
  };
  itemClickHandler = (item) => {
    this.setState({
      selectedItem: item,
    });
  };
  closeDetail = () => {
    this.setState({
      selectedItem: "",
      imgRotation: 0,
      imgFlip: false,
    });
  };
  render() {
    //console.log("aaaaaa");
    //console.log(this.createJSONFromFileNames());

    if (this.state.data.length === 0) {
      this.setState({ data: Data });
    }

    let searchBar = (
      <SearchBar input={this.state.input} change={this.inputChangeHandler} />
    );
    let view = (
      <div>
        <h1>Katalog profili</h1>
        <p>dostępne profile: {this.state.data.length}</p>
        {searchBar}
        <SearchList
          data={this.state.data}
          input={this.state.input}
          clicked={this.itemClickHandler}
        />
      </div>
    );
    if (this.state.selectedItem.index !== undefined) {
      view = (
        <DetailCard
          item={this.state.selectedItem}
          rotation={this.state.imgRotation}
          flipped={this.state.imgFlip}
          flipImg={this.flipImg}
          rotateImg={this.rotateImg}
          close={this.closeDetail}
        />
      );
    }
    console.log(this.state);

    return <div className="App">{view}</div>;
  }
}

export default App;
