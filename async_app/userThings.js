import User from './users';
import Thing from './thing';

class userData {
	constructor(search) {
		this.search = search;
	}
	handleData(getThings) {
		new User(this.search).getData((items) => {
			const listOfThings = [];
			items.forEach(element => {
				listOfThings.push(new Thing(element.login, element.avatar_url, 'User'));
			});
			console.log(listOfThings);
			getThings(listOfThings);
		});
	}
}

export default userData;