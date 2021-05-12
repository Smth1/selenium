const BaseFragment = require('protractor-element-extend').BaseFragment;

class OurOffices extends BaseFragment {
    constructor(rootElement) {
        super(rootElement);
        this.europeTab = element(by.xpath('//*[@id="id-d4f6ba92-c566-388d-9892-03fe1a33ce5b"]/div[1]/div/div[2]/a'));
        this.americasTab = element(by.xpath('//*[@id="id-d4f6ba92-c566-388d-9892-03fe1a33ce5b"]/div[1]/div/div[1]/a'));

        this.canadaButton = element(by.xpath('//*[@id="id-d4f6ba92-c566-388d-9892-03fe1a33ce5b"]/div[2]/div/div/div[1]/div[1]/div/div[4]/div/button'));
        this.mexicoButton = element(by.xpath('//*[@id="id-d4f6ba92-c566-388d-9892-03fe1a33ce5b"]/div[2]/div/div/div[1]/div[1]/div/div[5]/div/button'));
        this.unitedStatesButton = element(by.xpath('//*[@id="id-d4f6ba92-c566-388d-9892-03fe1a33ce5b"]/div[2]/div/div/div[1]/div[1]/div/div[6]/div/button'));

        this.austriaButton = element(by.xpath('//*[@id="id-d4f6ba92-c566-388d-9892-03fe1a33ce5b"]/div[3]/div/div/div[1]/div[1]/div/div[10]/div/button'));
        this.bulgariaButton = element(by.xpath('//*[@id="id-d4f6ba92-c566-388d-9892-03fe1a33ce5b"]/div[3]/div/div/div[1]/div[1]/div/div[11]/div/button'));
        this.czechRepublicButton = element(by.xpath('//*[@id="id-d4f6ba92-c566-388d-9892-03fe1a33ce5b"]/div[3]/div/div/div[1]/div[1]/div/div[12]/div/button'))
        this.franceButton = element(by.xpath('//*[@id="id-d4f6ba92-c566-388d-9892-03fe1a33ce5b"]/div[3]/div/div/div[1]/div[1]/div/div[13]/div/button'));
    }

    clickAmericasTab() {
        this.americasTab.click();
    }

    clickEuropeTab() {
        this.europeTab.click();
    }
}

module.exports = OurOffices;
