import axios from 'axios';
class User {
	constructor (search) {
		this.search = search;
	}
	getData(onFinish) {
		axios.get('https://api.github.com/search/users?q=' + this.search)
			.then(function (response) {
				onFinish(response.data.items);
			})
			.catch(function (error) {
				console.log(error);
			});
	}
}
export default User;