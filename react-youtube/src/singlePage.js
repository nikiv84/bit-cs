import React from 'react';
import { dataService } from "./service/dataService";
import VideoComponent from "./components/videoComponent";
import SideVideoComponent from "./components/sideVideoComponent";
import Search from "./common/search";
import VideoHistory from "./components/videoHistory";

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      singleVideo: null,
      prevVid: null
    }

    this.loadSingleVideo = this.loadSingleVideo.bind(this);
    this.loadSideVideos = this.loadSideVideos.bind(this);
    this.searchRequest = this.searchRequest.bind(this);
    this.searchVideos = this.searchVideos.bind(this);
    this.setPrevVid = this.setPrevVid.bind(this);
  }

  searchRequest(searchString) {
    this.searchVideos(searchString);
  }

  searchVideos(searchString) {
    dataService.getSearchResults(searchString, (result) => {
      const allVids = result;
      const mainVid = allVids.shift();
      this.setState({
        results: allVids,
        singleVideo: mainVid
      })
    })
  }

  loadSingleVideo(id) {
    dataService.getSingleVideo(id, (result) => {
      this.setState({
        singleVideo: result
      });
      this.loadSideVideos(result.title);
    }, (error) => {
      console.log(error);
    })
  }

  loadSideVideos(title) {
    dataService.getSearchResults(title, (result) => {
      result.shift();
      this.setState({
        results: result
      })
    })
  }

  componentDidMount() {
    const vidId = this.props.match.params.id;
    this.loadSingleVideo(vidId);

  }

  componentWillReceiveProps(nextProps) {
    let nextId = nextProps.match.params.id;
    this.loadSingleVideo(nextId);
  }

  setPrevVid(id) {
    this.setState({
      prevVid: id
    })
  }

  render() {

    if (!this.state.singleVideo || this.state.results.length === 0) {
      return <h1>Loading...</h1>
    }

    const videos = this.state.results;
    const mainVid = this.state.singleVideo;

    return (
      <div>
        <div className="row hasbg">
          <div className="col s10 offset-s1 m6 offset-m3">
            <Search searchRequest={this.searchRequest} />
          </div>
        </div>
        <div className="row">
          <div className="col s8 offset-s2 m12 l5 offset-l2 main-vid center">
            <VideoComponent video={mainVid} />
            <VideoHistory id={this.state.prevVid} />
          </div>
          <div className="col s4 l3 side-vids left">
            {videos.map((video, index) => <SideVideoComponent prevVid={mainVid} handleHistory={this.setPrevVid} video={video} key={index} />)}
          </div>
        </div>
      </div>
    );
  }
}