import Repo from './repos';
import Thing from './things';

class repoData {
	handleUsers(getThings) {
		new Repo().getData(function (items) {
			let listOfThings = [];
			for (let i = 0; i < items.length; i++) {
				listOfThings.push(new Thing(items[i].name, items[i].owner.avatar_url));
			}
			getThings(listOfThings);
		});
	}
}

export default repoData;