import React, { Component } from 'react';
import MainPageComponent from "./main/mainPage";
import './assets/css/style.css';

class App extends Component {
  render() {
    return (

      <div className="row">
        <MainPageComponent />
      </div>

    );
  }
}

export default App;
