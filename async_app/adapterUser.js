import User from './users';
import Thing from './things';

class userData {
	constructor (search) {
		this.search = search;
	}
	handleUsers(getThings) {
		new User(this.search).getData(function (items) {
			let listOfThings = [];
			for (let i = 0; i < items.length; i++) {
				listOfThings.push(new Thing(items[i].login, items[i].avatar_url));
			}
			getThings(listOfThings);
		});
	}
}

export default userData;