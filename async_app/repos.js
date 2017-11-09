import axios from 'axios';

class Repo {
	constructor(search) {
		this.search = search;
	}
	getData(onFinish) {
		axios.get('https://api.github.com/search/repositories?q=' + this.search + '&per_page=30')
			.then((response) => {
				onFinish(response.data.items);
			})
			.catch((error) => {
				throw new Error('Error retrieving data!');
			});
	}
}

export default Repo;