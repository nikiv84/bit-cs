import React from 'react';
import './assets/css/style.css'
import { Switch, Route, Redirect } from "react-router-dom";
import MainPage from './mainPage';
import SinglePage from './singlePage';

class App extends React.Component {
  render() {

    return (
      <div className="hasbg">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/video/:id" component={SinglePage} />
        </Switch>
      </div>
    );
  }
}

export default App;