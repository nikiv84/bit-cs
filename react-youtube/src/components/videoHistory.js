import React from "react";
import { Link } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import { dataService } from "../service/dataService";

export default class VideoHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            singleVideo: null
        }
        this.loadSingleVideo = this.loadSingleVideo.bind(this);
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

    componentWillReceiveProps(nextProps) {
        const id = nextProps.id;
        this.loadSingleVideo(id);
    }

    render() {
        if (!this.state.singleVideo) {
            return <h5>No previous video</h5>
        }
        const {id, title, thumbnails} = this.state.singleVideo;

        return (
            <div className="col s6">
                <h5>Previous video</h5>
                <Link to={`/video/${id}`}>
                    <img src={thumbnails} alt={title} className="thumb" />
                    <div className="left-align">
                        <h5>{title}</h5>
                    </div>
                </Link>
            </div>

        )
    }
}