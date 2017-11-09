class Thing {
	constructor(name, url) {
		this.name = name;
		this.url = url;
	}

	printThings() {
		console.log('Name: ' + this.name + ', url: ' + this.url);
	}
}

export default Thing;