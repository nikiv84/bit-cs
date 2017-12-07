import React from 'react';
import { dataService } from "./dataService";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			result: [],
			search: "",
			randomNum: 0
		}

		this.loadData = this.loadData.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);

	}


	handleChange(event) {
		let searchString = event.target.value;

		console.log(searchString);

		this.setState({
			search: searchString
		})

	}

	handleKeyPress(event) {
		if (event.key === 'Enter') {
			if (this.state.searchString === "") {
				return;
			}
			this.loadData(this.state.search);
		}

		this.setState({
			randomNum: Math.floor(Math.random() * 200)
		})

	}

	loadData(query) {
		dataService.getGifRequest(query, (result) => {
			console.log(result.data);
			this.setState({
				result: result.data
			})
		}, (error) => {
			console.log(error);
		})
	}


	render() {


		if (this.state.result.length === 0) {
			return (
				<div className="container">
					<div className="row">
						<header className="App-header">
							<h1 className="App-title">BitGif</h1>
						</header>
						<div className="col s12">
							<input type="text" value={this.state.search} onKeyPress={this.handleKeyPress} onChange={this.handleChange} />
						</div>
					</div>
					<div className="row">
						<div className="col s8 offset-s2 center" style={{width: "70%"}}>
							<img src="https://i.imgur.com/seuaOqf.gif" style={{width: "50%"}} alt="loading..." />
						</div>
					</div>
				</div>

			)
		}

		const gifs = this.state.result;
		console.log(gifs);
		return (
			<div className="container">
				<header className="App-header">
					<h1 className="App-title">BitGif</h1>
				</header>
				<input type="text" value={this.state.search} onKeyPress={this.handleKeyPress} onChange={this.handleChange} />
				<div className="row">
					<div className="col s8 offset-s2">
						<img src={gifs[this.state.randomNum].images.original.url} alt="gif" style={{width: "100%"}} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
