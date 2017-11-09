import * as axios from 'axios';

class Repo {
	getData(onFinish) {
		axios.get('https://api.github.com/search/repositories?q=explore')
			.then(function (response) {
				onFinish(response.data.items);
			})
			.catch(function (error) {
				console.log(error);
			});
	}
}

export default Repo;