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
    const list =
      " RS030.png   VG1518.png  VG1619.png  VG537.png  VG660.png  VL484.png    RS031.png   VG1519.png  VG2600.png  VG539.png  VL479.png  VL485.png UG553.png   VG1611.png  VG2601.png  VG552.png  VL480.png  VL486.png    VG054.png   VG1612.png  VG2602.png  VG554.png  VL481.png  VL487.png    VG1515.png  VG1613.png  VG535.png   VG565.png  VL482.png  VL488.png    VG1517.png  VG1618.png  VG536.png   VG566.png  VL483.png  VL489.png";
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
    console.log(
      "///////////////////////////////////////////////////////////////////////////////////////////"
    );
    console.log(this.createJSONFromFileNames());

    // if (this.state.data.length === 0) {
    //   this.setState({ data: Data });
    // }

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
