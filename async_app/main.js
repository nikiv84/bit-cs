import userData from './adapterUser';
// import repoData from './adapterRepo';

class Main {
	constructor(search) {
		this.search = search;
	}
	run() {
		new userData(this.search).handleUsers(function (things) {
			for (let i = 0; i < things.length; i++) {
				things[i].printThings();
			}
		});
	}
}

new Main('nikiv84').run();