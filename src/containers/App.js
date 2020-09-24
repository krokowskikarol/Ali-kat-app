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

  //create json from files from file nemes
  createJSONFromFileNames = () => {
    const list =
      "ACVS04.png  GT015.png    IP023.png    IP423.png       UG050.png     VG575.png      ALP745.png  GT016.png    IP024.png    IP424.png       UG054.png     VG576.png      ASP.png     GT017.png    IP024BM.png  IP425.png       UG055.png     VG60.png      EF194.png   GT020.png    IP025.png    IP430.png       UG551.png     VG610.png      EF2000.png  GT021.png    IP025BM.png  IP431.png       UG852.png     VG611N.png      EF2100.png  GT022.png    IP027.png    IP432.png       UN002.png     VG612.png      EF2120.png  GT023.png    IP030.png    IP435.png       UN010.png     VG615.png      EF213.png   GT030.png    IP031.png    IP436.png       UN075.png     VG616.png      EF213N.png  GT031.png    IP032.png    IP437.png       UN078.png     VG617.png      EF214.png   GT032.png    IP033.png    IP438.png       UN104.png     VG618.png      EF2140.png  GT033.png    IP034PL.png  IP439.png       UN119.png     VG619.png      EF214N.png  GT035.png    IP035.png    IP457.png       UN120.png     VG620.png      EF215.png   GT037.png    IP036.png    IP458.png       UN150.png     VG621.png      EF216.png   GT038.png    IP037.png    IP510.png       UN151.png     VG622.png      EF2160.png  GT040.png    IP038.png    IP515.png       UN177.png     VG624.png      EF217.png   GT044.png    IP040.png    IP519.png       UN330.png     VG630.png      EF220.png   GT050.png    IP044.png    IP520.png       UN331.png     VG632.png      EF222.png   GT051.png    IP045.png    IP521.png       UN332.png     VG633.png      EF224.png   GT052.png    IP047.png    IP530.png       UN333.png     VG651.png      EF230.png   GT060.png    IP048.png    IP557.png       UN334.png     VG652.png      EF230N.png  GT066.png    IP050.png    IP561.png       UN335.png     VG653.png      EF232.png   GT070.png    IP053.png    IP570.png       UN340.png     VG654.png      EF235.png   GT071.png    IP054.png    IP610.png       UN341.png     VG655.png      EF236.png   GT072.png    IP055.png    IP620.png       UN342.png     VG661.png      EF237.png   GT073.png    IP056.png    IP621.png       UN343.png     VG662.png      EF238.png   GT075.png    IP057.png    IP622.png       UN344.png     VG663.png      EF240N.png  GT076.png    IP058.png    IP625.png       UN345.png     VG664.png      EF241.png   GT077.png    IP068.png    IP627.png       UN380.png     VG665.png      EF242N.png  GT078.png    IP069.png    IP630.png       UN381.png     VG670.png      EF243.png   GT090.png    IP070.png    IP631.png       UN385.png     VG671.png      EF246.png   GT091.png    IP071.png    IP656.png       UN500.png     VG672.png      EF280.png   GT110.png    IP072.png    IP690.png       UN501.png     VG673.png      EF290.png   GT111.png    IP074.png    IP691.png       UN510.png     VG674.png      EF297.png   GT112.png    IP085.png    IP692.png       UN511.png     VG681.png      EF299.png   GT113.png    IP090.png    IP693.png       UTL033.png    VG682.png      EF475.png   GT130.png    IP095.png    IP720.png       UTL080.png    VG711.png      EF476.png   GT131.png    IP096.png    IP721.png       UTL081.png    VG718.png      EF850.png   GT150.png    IP1011.png   IP723.png       UTL082.png    VG810N.png      EF851.png   GT151.png    IP110.png    IP725.png       UTL083.png    VG820N.png      EF853.png   GT1624.png   IP111.png    IP726.png       VG12.png      VG830N.png      EF854.png   GT1625.png   IP112.png    IP727.png       VG1510.png    VL148.png      EF860.png   GT1626.png   IP114.png    IP728.png       VG1514.png    VL149.png      EF861.png   GT1627.png   IP115.png    IP729.png       VG156.png     VL150PL.png      EF870.png   GT300.png    IP119.png    IP740.png       VG176.png     VL155.png     EF871.png   GT301.png    IP120.png    IP811.png       VG2616.png    VL159.png      EL010.png   GT310.png    IP121.png    IP813.png       VG317.png     VL161.png      EL011.png   GT311.png    IP122.png    IP814.png       VG32.png      VL163.png      EL015.png   GT414.png    IP123.png    IP815.png       VG404.png     VL166.png      EL016.png   GT415.png    IP127.png    IP820.png       VG408.png     VL170.png      EL031.png   GT424.png    IP130.png    IP821.png       VG412.png     VL171.png      EL050.png   GT424BI.png  IP131.png    IP824.png       VG416.png     VL172.png      EL051.png   GT425.png    IP135.png    IP824BM.png     VG422.png     VL561.png      EL085.png   GT425BI.png  IP136.png    IP825.png       VG426.png     VL562.png      EL810.png   GT426.png    IP151.png    IP825BM.png     VG430.png     VL59.png      ES01.png    GT427.png    IP152.png    IP830.png       VG510.png     VL59R.png      ES02.png    GT445.png    IP153.png    IP831.png       VG511N.png    VL60.png      ES03.png    GT447.png    IP154.png    IP832.png       VG512.png     VL66.png      ES04.png    GT448.png    IP155.png    IP834.png       VG513N.png    VL67.png      ES05.png    GT453.png    IP156.png    IP854.png       VG514.png     VL68.png      ES06.png    GT454.png    IP162.png    IP855.png       VG516.png     VL69.png      ES07.png    GT455.png    IP171.png    IP872.png       VG517.png     VL70.png      ES08.png    GT460.png    IP172.png    IP873.png       VG518.png     VL71.png      ES13.png    GT461.png    IP173.png    IP874.png       VG519.png     VL72.png      ES14.png    GT490.png    IP174.png    IP875.png       VG52.png      VL73.png      FT053.png   GT491.png    IP175.png    IP891.png       VG520N.png    VL75.png      FT054.png   GT492.png    IP176.png    IP892.png       VG520NBI.png  VL76.png      FT155.png   GT493.png    IP177.png    IP893.png       VG521N.png    VL77.png      FT156.png   GT494.png    IP178.png    IP894.png       VG521NBI.png  VL78.png     GL704.png   GT630.png    IP200.png    IP910.png       VG522.png     VL92.png      GL708.png   GT631.png    IP201.png    IP912.png       VG522BI.png   VLP72.png      GL712.png   GT657.png    IP210.png    IP916PL.png     VG523.png     VR075.png      GL716.png   GT690.png    IP213.png    IP921.png       VG523BI.png   VS532.png      GL720.png   GT693.png    IP218.png    IP922.png       VG524.png     VT081.png      GL724.png   GT720.png    IP220.png    IP930.png       VG524BI.png   VT084.png      GL728.png   GT721.png    IP230.png    IP933.png       VG525N.png    VT085.png      GL732.png   GT722.png    IP231.png    IP934.png       VG526N.png    VT180.png      GL736.png   GT723.png    IP257.png    IP935.png       VG53.png      VT182.png      GL740.png   GT740.png    IP319.png    MC156.png       VG530.png     WS479.png      GL744.png   IN357.png    IP320.png    PL25X2.png      VG531.png     WS480.png      GL748.png   IP010.png    IP330.png    PVC500.png      VG532.png     WS481.png      GL752.png   IP011.png    IP335.png    PVC503.png      VG533.png     WS482.png      GL756.png   IP012.png    IP357.png    RK20X20X2.png   VG53A.png     WS483.png      GL760.png   IP013.png    IP415.png    RP100X40X4.png  VG542.png     WS484.png      GL844.png   IP014.png    IP416.png    RP40X25X2.png   VG543.png     WS485.png      GL852.png   IP015.png    IP417.png    RP50X30X2.png   VG551N.png    WS486.png      GT010.png   IP017.png    IP418.png    RP60X40X2.png   VG553N.png    WS487.png      GT011.png   IP019.png    IP419.png    RS2531.png      VG555.png     WS488.png      GT012.png   IP020.png    IP420.png    SL075.png       VG567.png     WS489.png      GT013.png   IP021.png    IP422.png    SR014.png       VG568.png";
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
        <DetailCard item={this.state.selectedItem} close={this.closeDetail} />
      );
    }
    console.log(this.state);

    return <div className="App">{view}</div>;
  }
}

export default App;
