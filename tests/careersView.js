const CareersPage = require('./pages/CareersPage');

describe('EPAM | Careers page', () => {
    const careersPageObject = new CareersPage();

    beforeAll(function () {
        browser.get('https://www.epam.com/careers');
    });

    it('Searching for job', function () {
        careersPageObject.inputKeyword('QA');
        careersPageObject.findJobs();

        expect(careersPageObject.resultLength() > 0);
    });
});
