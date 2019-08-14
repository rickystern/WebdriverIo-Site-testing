const testPage = require('../pageObjects/testPage');
const assert = require('assert');
const fetch = require('node-fetch');
const expect = require('chai').expect



describe(' Running a series of tests on the Webdriver.io home page', () => {
    beforeEach(() => {
       browser.maximizeWindow();
    });

    // afterEach(()=>{
    //    browser.pause(2000)
    //   });

    it('should have the page title', () => {
       testPage.open();
    });
})
