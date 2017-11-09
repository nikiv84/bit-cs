import userData from './userThings';
import repoData from './repoThings';

class Main {
	constructor(search) {
		this.search = search;
	}
	run() {
		new repoData(this.search).handleData((things) => {
			things.forEach(element => {
				console.log(element.getData());
			});
		});
	}
}

new Main('bit-cs').run();