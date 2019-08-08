const assert = require('assert');
const fetch = require('node-fetch');
const expect = require('chai').expect;


describe(' Running a series of tests on the Webdriver.io home page', () => {
    beforeEach(() => {
        browser.url('https://webdriver.io');
    });

    afterEach(()=>{
       browser.pause(2000)
      });

    it('should have the page title', () => {
        const title = browser.getTitle();
        assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
        console.log('the title test passes');// Outputs text if assert passes
    });

    it('should return the titles of the hyperlinks on the upper navbar screen', () => {
        const screentitles = $$('.slidingNav > ul > li> a');
        const Titles = ['Guide', 'API', 'Help', 'Blog', 'GitHub' ]// array stores the name test on the links
        for (let i = 0; i < 5; i++) { 
            assert.equal(screentitles[i].getText(), Titles[i], 'both strings must be equal for the test to pass');
            console.log(screentitles[i].getText()); // outputs: "API"
        }
     });

    it('should check for and log the hyperlinks present in the upper navigation bar', () => {
        const obtainedHyperlinks = $$('.slidingNav > ul > li> a');
        const hyperlinks = ['https://webdriver.io/docs/gettingstarted.html', 'https://webdriver.io/docs/api.html', 'https://webdriver.io/help.html', 'https://webdriver.io/blog/', 'https://github.com/webdriverio/webdriverio'];
        for (let i = 0; i < 4; i++) {
            assert.equal(obtainedHyperlinks[i].getAttribute("href"), hyperlinks[i], 'tests to see if the hyperlinks are the same')
            console.log(obtainedHyperlinks[i].getAttribute("href"));// outputs: "API Hyperlinks"
        }
    });

    it('should inject sample text into the searchbar and check if it produces a results page', () => {
        const searchterm = $('.algolia-autocomplete > input');
        searchterm.setValue('Selenuim');
        console.log("search term inserted");
        browser.pause(2000);
        const displaybar = $('#algolia-autocomplete-listbox-0 > div')
        console.log('the value below tells if the term was input and the results bar was displayed ')
        console.log(displaybar.isDisplayed());// displays the "truth-y" value if the results popup bar is visible
    });

    it('should navigate the hyperlinks referenced in the navigation bar', () => {
        for (let index = 1; index <= 6; index++) {
            if (index == 5) {
                assert.equal(index, 5)
                index += 1
                const hyperlink = $(`.fixedHeaderContainer > div > header > div >.slidingNav > ul > li:nth-of-type(${index}) > a`);
                hyperlink.click();
                browser.pause(2000);
                browser.back();
            } else {
                const hyperlink = $(`.fixedHeaderContainer > div > header > div >.slidingNav > ul > li:nth-of-type(${index}) > a`);
                hyperlink.click();
                browser.pause(2000);
            }
        }
    });

    it('should check for broken links in the upper navbar', async function () {
        const links = $$('.fixedHeaderContainer > div > header > div > .slidingNav > ul > li>a');
        const urls = links.map(links => links.getAttribute('href'));
        const requests = urls.map(url => fetch(url));
        const responses = await Promise.all(requests);
        const statusCodes = responses.map(response => response.status);
        statusCodes.forEach(statusCode => {
            expect(statusCode).to.be.below(400);
        });

        for (let i = 0; i < 5; i++) {
            if (statusCodes[i] <= 400) {
                console.log('test passed link is good')
            } else {
                console.log('test failed broken link present')
            }
        }
    });
})
