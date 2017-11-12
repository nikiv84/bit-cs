import axios from 'axios';

class User {
	constructor(search) {
		this.search = search;
	}
	getData(onFinish) {
		axios.get('https://api.github.com/search/users?q=' + this.search + '&per_page=10')
			.then((response) => {
				console.log('Hey: ' + this.search);
				console.log(response.data.items);
				onFinish(response.data.items);
			})
			.catch((error) => {
				console.log('Error: ' + error);

			});
	}
}

export default User;