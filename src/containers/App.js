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

  inputChangeHandler = (event) => {
    this.setState({
      input: event.target.value.toUpperCase(),
    });
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
    let searchBar = (
      <SearchBar input={this.state.input} change={this.inputChangeHandler} />
    );
    let view = (
      <div>
        <h1>Katalog profili</h1>
        <p>dodanych elementów: {this.state.data.length}</p>
        {searchBar}
        <section id="info">
          <p>Aby rozpocząć podaj indeks szukanego elementu.</p>
          <p>
            Jeżeli poszukiwanym elementem jest połowka np: <b>XIP010A</b> nalezy
            podać indeks pełnego profilu tj. <b>IP010</b> lub np. <b>IP030</b> a
            nastepnie sprawdzić oznaczenia połówek.
          </p>
        </section>
      </div>
    );
    if (this.state.input !== "") {
      view = (
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
    }
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
    //console.log(this.state); // for debuging purposes

    return <div className="App">{view}</div>;
  }
}

export default App;
