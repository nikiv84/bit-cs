import React from "react";
import Search from "../common/searchComponent";
import TableDataComponent from "./tableDataComponent";
import { commService } from "../service/communicationService";
import City from "../dto/cityDTO";

class MainPageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: ["Belgrade", "Nis", "Paris", "New York"],
            citiesData: null
        }
        this.initBind();
    }

    initBind() {
        this.loadData = this.loadData.bind(this);
        this.searchRequest = this.searchRequest.bind(this);
    }


    searchRequest(searchString) {
        console.log(searchString);
        let newCities = this.state.cities;
        newCities.push(searchString);
        this.setState({
            cities: newCities
        })
        this.loadData();
    }

    loadData = () => {
        let citiesData = [];
        this.state.cities.forEach((city) => {
            commService.getRequest(city, (result) => {
                const city = result.data.city;
                const list = result.data.list;
                const temp = list.map(dt => dt.main.temp);
                const humid = list.map(dt => dt.main.humidity);
                const theCity = new City(city.id, city.name, city.coord.lat, city.coord.lon, temp, humid);
                citiesData.push(theCity);
                this.setState({
                    citiesData
                })
            }, (error) => {
                console.log(error);
            })
        });

    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        const cities = this.state.citiesData;

        if (!cities) {
            return <h1>Loading...</h1>
        }
        console.log("hey ", cities.length);

        return (
            <div className="col s12">
                <Search searchRequest={this.searchRequest}/>
                <TableDataComponent cities={this.state.citiesData} />
            </div>
        );
    }
}

export default MainPageComponent;