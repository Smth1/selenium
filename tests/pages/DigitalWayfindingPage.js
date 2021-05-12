const BasePage = require('./BasePage');
const config = require('./../../config/chrome');

class DigitalWayfindingPage extends BasePage {
    constructor() {
        super();
        this.downloadPdfButton = element(by.xpath('//*[@id="main"]/div/div[3]/div/div[1]/div[2]/div/a'));
        this.directoryName = config.config.capabilities.chromeOptions.prefs.download.default_directory
        this.file = 'EPAM_Continuum_Case-Study_Southwest-Airlines.pdf'
        this.filename = this.directoryName + '/' + this.file
        this.fs = require('fs');
    }

    clickDownloadPdfButton() {
        this.downloadPdfButton.click();
    }

    beforeDownload(filename) {
        if (this.fs.existsSync(filename)) {
            // Make sure the browser doesn't have to rename the download.
            this.fs.unlinkSync(filename);
        }
    }
}

module.exports = DigitalWayfindingPage;
