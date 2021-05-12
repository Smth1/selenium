const BaseFragment = require('protractor-element-extend').BaseFragment;

class TopMenu extends BaseFragment {
	constructor(rootElement) {
		super(rootElement);
		this.languageDropDown = element(by.xpath('//*[@id="wrapper"]/div[2]/div[1]/header/div/ul/li[2]/div/button'));
		this.ukrainianLanguage = element(by.xpath('//*[@id="wrapper"]/div[2]/div[1]/header/div/ul/li[2]/div/nav/ul/li[8]/a'));
	}

	clickDropdDown() {
		return this.languageDropDown.click();
	}

	selectUkrainianLanguage() {
		return this.ukrainianLanguage.click();
	}
}

module.exports = TopMenu;

