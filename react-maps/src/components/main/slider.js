import React from "react";
import Slider from "react-slick";

class CitySlider extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        let country = event.target.name;

        if (country == "Serbia") {

            let coordinates = {
                lat: 44.786568,
                lng: 20.448922
            }

            this.props.getCoordinates(coordinates);
        } else if (country == "Israel") {

            let coordinates = {
                lat: 32.085300,
                lng: 34.781768
            }

            this.props.getCoordinates(coordinates);
        } else if (country == "England") {

            let coordinates = {
                lat: 51.507351,
                lng: -0.127758
            }

            this.props.getCoordinates(coordinates);
        } else if (country == "Netherlands") {

            let coordinates = {
                lat: 52.370216,
                lng: 4.895168
            }

            this.props.getCoordinates(coordinates);
        } else if (country == "Spain") {

            let coordinates = {
                lat: 40.416775,
                lng: -3.703790
            }

            this.props.getCoordinates(coordinates);
        } else if (country == "USA") {

            let coordinates = {
                lat: 38.907192,
                lng: -77.036871
            }

            this.props.getCoordinates(coordinates);
        }

    }

    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true
        };

        return (
            <Slider { ...settings }>
                <div className="center"><h3><a onClick={this.handleClick} name="Serbia" href="#">Serbia</a></h3></div>
                <div className="center"><h3><a onClick={this.handleClick} name="Israel" href="#">Israel</a></h3></div>
                <div className="center"><h3><a onClick={this.handleClick} name="England" href="#">England</a></h3></div>
                <div className="center"><h3><a onClick={this.handleClick} name="Netherlands" href="#">Netherlands</a></h3></div>
                <div className="center"><h3><a onClick={this.handleClick} name="Spain" href="#">Spain</a></h3></div>
                <div className="center"><h3><a onClick={this.handleClick} name="USA" href="#">USA</a></h3></div>
            </Slider>
        );
    }
}

export default CitySlider;