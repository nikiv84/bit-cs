import React from 'react';
import { dataService } from "./service/dataService";
import VideoComponent from "./components/videoComponent";
import SideVideoComponent from "./components/sideVideoComponent";
import Search from "./common/search";
import './assets/css/style.css'

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { results: [] }

    this.loadData = this.loadData.bind(this);
    this.searchRequest = this.searchRequest.bind(this);

  }

  searchRequest(searchString) {
    this.loadData(searchString);
  }

  loadData(searchString) {
    dataService.getSearchResults(searchString, (result) => {
      console.log(result);
      this.setState({
        results: result
      })
    })
  }

  componentDidMount() {
    this.loadData();
  }

  render() {

    if (this.state.results.length === 0) {
      return <h1>Loading...</h1>
    }

    const videos = this.state.results;

    return (
      <div>
        <div className="row hasbg">
          <div className="col s10 offset-s1 m6 offset-m3">
            <Search searchRequest={this.searchRequest} />
          </div>
        </div>
        <div className="row">
          <div className="col s4 offset-s4 sidevids">
            {videos.map((video, index) => <SideVideoComponent video={video} key={index} />)}
          </div>
        </div>
      </div>
    );
  }
}