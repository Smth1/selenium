const DigitalWayfindingPage = require('./pages/DigitalWayfindingPage');

describe('EPAM | DigitalWayfinding page', () => {
    const digitalWayfindingPageObject = new DigitalWayfindingPage();

    beforeAll(function () {
        browser.get('https://www.epam.com/');
    });

    it('Checking downloading on page', function () {
        browser.get('https://www.epam.com/our-work/case-studies/southwest-airlines-digital-wayfinding-design-and-prototype');

        digitalWayfindingPageObject.beforeDownload(digitalWayfindingPageObject.filename);
        digitalWayfindingPageObject.clickDownloadPdfButton();

        browser.driver.wait(function() {
            return digitalWayfindingPageObject.fs.existsSync(digitalWayfindingPageObject.filename);
        }, 3000).then(function() {
            expect(digitalWayfindingPageObject.fs.existsSync(digitalWayfindingPageObject.filename)).toBeTruthy();
        });

        expect(digitalWayfindingPageObject.getPageTitle()).toEqual('Digital Wayfinding Improves Customer Experience | EPAM');
    });
});
