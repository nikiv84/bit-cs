import React from "react";
import Search from "../common/search";
import TableDataComponent from "./tableDataComponent";
import { commService } from "../service/communicationService";

class MainPageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityDataWeather: [],
            cityData: null
        }
        this.initBind();
    }

    initBind() {
        this.loadData = this.loadData.bind(this);
    }

    loadData() {
        commService.getRequest('792680', (result) => {
            this.setState({
                cityDataWeather: result.data.list,
                cityData: result.data.city
            })
            console.log(this.state.cityData);
        }, (error) => {
            console.log(error);
        })
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        const city = this.state.cityData;

        if(!city){
            return <h1>Loading...</h1>
        }

        return (
            <div className="col s12">
                <Search />
                <TableDataComponent city={city}/>
            </div>
        );
    }
}

export default MainPageComponent;