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
      "MDS001.png    MDS040.png   MDS110.png   MDS2013.png  MDS2420.png  MDS810.png    MDS010.png    MDS050.png   MDS111.png   MDS2020.png  MDS2430.png  MDS811.png    MDS011.png    MDS051.png   MDS113.png   MDS210.png   MDS2440.png  MDS812.png    MDS012.png    MDS053P.png  MDS114.png   MDS211.png   MDS310.png   MDS851.png    MDS013.png    MDS054N.png  MDS122.png   MDS212.png   MDS315.png   MDS854.png    MDS014.png    MDS060.png   MDS2001.png  MDS213.png   MDS320.png   MDS855.png    MDS015.png    MDS061.png   MDS2002.png  MDS222.png   MDS400N.png    MDS020.png    MDS062.png   MDS2003.png  MDS2300.png  MDS801.png    MDS021PL.png  MDS063.png   MDS2010.png  MDS2310.png  MDS802.png  MDS022.png    MDS064.png   MDS2011.png  MDS2400.png  MDS803.png    MDS030.png    MDS101.png   MDS2012.png  MDS2410.png  MDS804.png"; // add file name from >>cmd ls
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
    // console.log(this.createJSONFromFileNames());

    // if (this.state.data.length === 0) {
    //   this.setState({ data: Data });
    // }

    let searchBar = (
      <SearchBar input={this.state.input} change={this.inputChangeHandler} />
    );
    let view = (
      <div>
        <h1>Katalog profili</h1>
        <p>dostępne profile: {this.state.data.length}</p>
        {searchBar}
        <section id="info">
          <p>Aby rozpocząć podaj indeks szukanego elementu.</p>
          <p>
            Jeżeli poszukiwanym elementem jest połowka np: <b>XIP010A</b> nalezy
            podać indeks pełnego profilu tj. <b>IP010</b> lub np. <b>IP030</b> a
            nastepnie sprawdzić oznaczenia połowek.
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
