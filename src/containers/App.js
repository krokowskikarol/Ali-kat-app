import React, { Component } from "react";
import DetailCard from "../components/DetailCard/DetailCard";
import SearchList from "../components/SearchList/SearchList";
import SearchBar from "../components/SearchBar/SearchBar";
import SystemsTilesList from "../components/SystemsTilesList/SystemsTilesList";

//import Data from "./data.json";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("data is loaded");
    this.state = {
      data: [],
      isDataLoaded: false,
      systems: [],
      input: "",
      selectedItem: {},
      imgRotation: 0,
      imgFlip: false,
    };
  }
  componentDidMount() {
    const dataUrl =
      "https://raw.githubusercontent.com/krokowskikarol/appData/master/data.json";
    fetch(dataUrl)
      .then((response) => {
        return response.json();
      })
      .then((fetchedData) => {
        this.setState({
          data: fetchedData,
          isDataLoaded: true,
          systems: this.createSystemsArray(fetchedData),
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  createSystemsArray = (dataArray) => {
    let temp = [];
    let result = [];
    dataArray.forEach((element) => {
      temp.push(element.index.slice(0, 3).replace(/[0-9]/g, ""));
    });
    for (const value of temp) {
      if (
        result.indexOf(value) === -1 &&
        temp.filter((x) => x === value).length >= 10
      ) {
        result.push(value);
      }
    }
    result[result.indexOf("P")] = "P47";
    return result;
  };
  inputChangeHandler = (event) => {
    this.setState({
      input: event.target.value.toUpperCase(),
    });
  };
  rotateImg = () => {
    this.setState((prevState) => ({
      imgRotation: (prevState.imgRotation + 90) % 360,
    }));
  };
  flipImg = () => {
    this.setState((prevState) => ({ imgFlip: !prevState.imgFlip }));
  };
  itemClickHandler = (item) => {
    this.setState({
      selectedItem: item,
    });
  };
  systemTileClickHandler = (systemName) => {
    this.setState({
      input: systemName,
    });
  };
  closeDetail = () => {
    this.setState({
      selectedItem: "",
      imgRotation: 0,
      imgFlip: false,
    });
  };
  clearSearchBarInput = () => {
    this.setState({
      input: "",
    });
  };
  render() {
    const searchBar = (
      <SearchBar
        input={this.state.input}
        systems={this.state.systems}
        change={this.inputChangeHandler}
        clearInput={this.clearSearchBarInput}
      />
    );
    let view = (
      <div>
        <h1>Katalog profili</h1>
        <p>loading data</p>
      </div>
    );
    if (this.state.isDataLoaded) {
      view = (
        <div>
          <h1>Katalog profili</h1>
          {searchBar}
          <section id="info">
            <p>Aby rozpocząć podaj fragment indeksu szukanego elementu.</p>
            <SystemsTilesList
              systems={this.state.systems}
              clicked={this.systemTileClickHandler}
            />
          </section>
        </div>
      );
    }
    if (this.state.input !== "") {
      view = (
        <div>
          <h1>Katalog profili</h1>
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
    console.log(this.state); // for debuging purposes

    return <div className="App">{view}</div>;
  }
}

export default App;
