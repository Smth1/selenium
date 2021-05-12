const BasePage = require('./BasePage');
const OurOffices = require('./../fragments/OurOffices.fragment');
const OurResults = require('./../fragments/OurResults.fragment')
const TopMenu = require('./../fragments/TopMenu.fragment');

class IndexPage extends BasePage {
	constructor() {
		super();
		this.ourOffices = new OurOffices($('div.section:nth-child(10) > section:nth-child(1)'));
		this.topMenu = new TopMenu($('.header__content'));
		this.ourResults = new OurResults($('section.bg-color-white > div:nth-child(1) > div:nth-child(1)'));
		this.contactUsButton = element(by.xpath('//*[@id="main"]/div[1]/div[8]/section/div/div[3]/div/a'));
		this.leanMoreForm = element(by.xpath('//*[@id="_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor"]'));
	}

	clickAcceptCookieButton() {
		let el = element(by.xpath('/html/body/div[1]/div[1]/div/div/div[2]/button'));
		el.click();
	}

	clickContactUsButton() {
		this.contactUsButton.click();
	}
}

module.exports = IndexPage;
