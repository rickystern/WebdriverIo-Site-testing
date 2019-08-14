const assert = require('assert');
const page = require("../pageObjects/HomePageObject");


describe(' Running a series of tests on the Webdriver.io home page', () => {
    beforeEach(() => {
        page.basePageClass.open();
    });
    afterEach(() => {
        browser.pause(2000)
    });
    it('should have the page title', () => {
        const title = browser.getTitle();
        assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
        console.log('the title test passes');// Outputs text if assert passes
    });

    it('should return the titles of the hyperlinks on the upper navbar screen', () => {
        const Titles = ['Guide', 'API', 'Help', 'Blog', 'GitHub']// array stores the name test on the links
        for (let i = 0; i < 5; i++) {
            assert.equal(page.basePageClass.headerItems[i].getText(), Titles[i], 'both strings must be equal for the test to pass');
            console.log(page.basePageClass.headerItems[i].getText()); // outputs: "API"
        }
    });

    it('should check for and log the hyperlinks present in the upper navigation bar', () => {
        const hyperlinks = ['https://webdriver.io/docs/gettingstarted.html', 'https://webdriver.io/docs/api.html', 'https://webdriver.io/help.html', 'https://webdriver.io/blog/', 'https://github.com/webdriverio/webdriverio'];
        for (let i = 0; i < 5; i++) {
            assert.equal(page.basePageClass.headerItems[i].getAttribute("href"), hyperlinks[i], 'tests to see if the hyperlinks are the same')
            console.log(page.basePageClass.headerItems[i].getAttribute("href"));// outputs: "API Hyperlinks"
        }
    });

    it('should inject sample text into the searchbar and check if it produces a results page', () => {
        page.basePageClass.searchBar.setValue('Selenuim');
        console.log("search term inserted");
        console.log('the value below tells if the term was input and the results bar was displayed ')
        console.log(page.basePageClass.displayBar.isDisplayed());// displays the "truth-y" value if the results popup bar is visible
        browser.pause(2000);
    });

    it('should navigate the hyperlinks referenced in the navigation bar', () => {

        const checkedTitles = [' ', 'Getting Started · WebdriverIO', 'API Docs · WebdriverIO', 'WebdriverIO · Next-gen WebDriver test framework for Node.js', 'Blog · WebdriverIO', ' ', 'GitHub - webdriverio/webdriverio: Next-gen WebDriver test automation framework for Node.js']

        for (let index = 1; index <= 6; index++) {

            if (index == 5) {// skips the searchbar at index 5

                assert.equal(index, 5)
                index += 1

                const hyperlink = $(`.slidingNav > ul > li:nth-of-type(${index}) > a`);
                hyperlink.click();
                let title = browser.getTitle();
                browser.pause(2000);
                assert.equal(title, checkedTitles[index], 'checking the title on the current page');
                console.log(title);git 
            } else {
                const hyperlink = $(`.slidingNav > ul > li:nth-of-type(${index}) > a`);
                hyperlink.click();
                browser.pause(2000);
                let title = browser.getTitle();
                browser.pause(2000);
                assert.equal(title, checkedTitles[index], 'checking the title on the current page');
                console.log(title);
            }
        }


    });
})
