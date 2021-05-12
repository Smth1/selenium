const IndexPage = require('./pages/IndexPage');

describe('EPAM | Index page', () => {
	const indexPageObject = new IndexPage();

	afterAll(function () {
		browser.get('https://www.epam.com/');
	});

	beforeEach(function () {
		browser.get('https://www.epam.com/');
	});

	it('Sending to Our work page', function () {
		indexPageObject.clickAcceptCookieButton();
		indexPageObject.ourResults.clickLearnMoreButton() // When I click on 'Learn more' button
		expect(indexPageObject.getPageTitle()).toEqual('Explore our Work | EPAM Customer Stories, Brochures & Accelerators');
	});

	it('Sending to transforming insurance page', function (){
		indexPageObject.ourResults.clickThirtyPercentLink(); // When I click on '30 %' link
		expect(indexPageObject.getPageTitle()).toEqual('Transforming one of the UK’s Insurance leaders from the top down | EPAM');
	});

	it('Checking contact us section', function () {
		indexPageObject.clickContactUsButton();
		expect(indexPageObject.getPageTitle()).toEqual('Learn more about EPAM and Contact Us | EPAM');
		indexPageObject.leanMoreForm.isPresent();
	});

	it("Checking our offices section in Europe tab", function () {
		indexPageObject.ourOffices.europeTab.isPresent();

		indexPageObject.ourOffices.austriaButton.isPresent();
		indexPageObject.ourOffices.bulgariaButton.isPresent();
		indexPageObject.ourOffices.czechRepublicButton.isPresent();
		indexPageObject.ourOffices.franceButton.isPresent();
	});

	it("Checking our offices section in Americas tab", function () {
		indexPageObject.ourOffices.americasTab.isPresent();
		if (indexPageObject.ourOffices.americasTab.getAttribute('aria-selected') === false) {
			indexPageObject.ourOffices.clickAmericasTab();
		}
		indexPageObject.ourOffices.unitedStatesButton.isPresent();
		indexPageObject.ourOffices.mexicoButton.isPresent();
		indexPageObject.ourOffices.canadaButton.isPresent();
	});

	it("Changing language", function () {
		indexPageObject.topMenu.clickDropdDown();
		browser.sleep(200);
		indexPageObject.topMenu.selectUkrainianLanguage();
	});
});
