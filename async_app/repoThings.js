import Repo from './repos';
import Thing from './thing';

class repoData {
	constructor(search) {
		this.search = search;
	}
	handleData(getThings) {
		new Repo(this.search).getData((items) => {
			const listOfThings = [];
			items.forEach(element => {
				listOfThings.push(new Thing(element.name, element.owner.avatar_url, 'Repo'));
			});
			getThings(listOfThings);
		});
	}
}

export default repoData;