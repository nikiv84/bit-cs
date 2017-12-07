import React from 'react';
import './assets/css/style.css'
import { Switch, Route, Redirect } from "react-router-dom";
import MainPage from './mainPage';
import SinglePage from './singlePage';

class App extends React.Component {
  render() {

    return (
      <div>
        <Switch>
          <Route exact path="/video" component={MainPage} />
          <Route path="/video/:id" component={SinglePage} />
          <Redirect exact from="/" to="/video" />
        </Switch>
      </div>
    );
  }
}

export default App;