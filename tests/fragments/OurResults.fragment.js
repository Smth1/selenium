const BaseFragment = require('protractor-element-extend').BaseFragment;

class OurResults extends BaseFragment {
    constructor(rootElement) {
        super(rootElement);
        this.thirtyPercentLink = element(by.xpath('/html/body/div[2]/main/div[1]/div[4]/section/div/div[1]/div/div[2]/div/div[1]/div/div[3]/div/div/div/p[2]/a'));
        this.learnMoreButton = element(by.xpath('/html/body/div[2]/main/div[1]/div[4]/section/div/div[1]/div/div[1]/div/div[3]/div/a'));
    }

    clickLearnMoreButton() {
        this.learnMoreButton.click();
    }

    clickThirtyPercentLink() {
        this.thirtyPercentLink.click();
    }
}

module.exports = OurResults;
