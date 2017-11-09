import axios from 'axios';

class User {
	constructor(search) {
		this.search = search;
	}
	getData(onFinish) {
		axios.get('https://api.github.com/search/users?q=' + this.search + '&per_page=10')
			.then((response) => {
				onFinish(response.data.items);
			})
			.catch((error) => {
				throw new Error('Error retrieving data!');
			});
	}
}

export default User;