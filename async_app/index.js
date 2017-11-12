import userData from './userThings';
import repoData from './repoThings';
import UI from './uimodule';


class Main {
	constructor() {
		this.uiModule = new UI();
	}
	setupEventListeners() {
		const DOM = this.uiModule.getDOMElements();
		let uiMod = this.uiModule;
		let mainMod = this;
		$(DOM.search).on("click", function () {
			uiMod.clearUI();
			let searchTerm = uiMod.getSearch();
			console.log('Click: ' + searchTerm);
			mainMod.run(searchTerm);
		})
	}
	run(searchTerm) {
		let uiMod = this.uiModule;
		new userData(searchTerm).handleData((things) => {
			uiMod.generateHTML(things);
		});
	}
	init() {
		console.log('App has started...');
		this.setupEventListeners();
	}
}
new Main().init();
