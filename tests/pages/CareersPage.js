const BasePage = require('./BasePage');

class CareersPage extends BasePage {
    constructor() {
        super();
        this.keywordInput = element(by.xpath('//*[@id="new_form_job_search_1445745853_copy-keyword"]'));
        this.findButton = element(by.xpath('//*[@id="main"]/div[1]/div[3]/section/div/div[2]/div/form/button'));
        this.searchResult = element(by.xpath('//*[@id="main"]/div[1]/div[1]/section/div/div/div/section/ul'));
    }

    findJobs() {
        this.findButton.click();
    }

    inputKeyword(text) {
        this.keywordInput.sendKeys(text);
    }

    resultLength() {
        this.searchResult.length;
    }
}

module.exports = CareersPage;
