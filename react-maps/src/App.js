import React, { Component } from 'react';
import Header from "./components/common/header";
import './assets/css/style.css';
import CitySlider from "./components/main/slider";
import MapComponent from "./components/main/mapComponent";
import MainPageComponent from "./components/main/mainPageComponent";


class App extends Component {
  render() {
    return (
      <div>
        <div className="hasBg z-depth-2">
          <Header />
        </div>
        <MainPageComponent />
      </div>
    );
  }
}

export default App;
