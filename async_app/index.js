import userData from './userThings';
import repoData from './repoThings';

const list = $('<ul id="things"></ul>');
let naslov = $('<h1></h1>');
$('body').before(naslov);
$('body').before(list);

class Main {
	constructor(search) {
		this.search = search;
	}
	run() {
		new repoData(this.search).handleData((things) => {
			naslov.text(things[0].kind + ' search:');
			things.forEach(element => {
				let avatar = $('<img>');
				let liThings = $('<li></li>');
				avatar.attr('src', element.avatarUrl);
				avatar.attr('width', '300px');
				liThings.text(element.getData()).append(avatar);
				list.append(liThings);
			});
		});
	}
}

new Main('bit-cs').run();
