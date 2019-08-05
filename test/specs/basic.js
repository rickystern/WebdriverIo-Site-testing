const assert = require('assert');


describe('webdriver.io page', () => {

    it('should have the right title', () => {
        browser.url('https://webdriver.io');
        const title = browser.getTitle();
        assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
        // browser.pause(3000);
    });

    it('should return text on screen', () => {
        const text = $$('.fixedHeaderContainer > div > header > div > .slidingNav > ul > li');
        for(let i=0;i<4;i++){
        console.log(text[i].getText()); // outputs: "API"
        }

    });

    it ('should check and log the hyperlinks ', ()=>{
        const text = $$('.fixedHeaderContainer > div > header > div > .slidingNav > ul > li> a');
        for(let i=0;i<4;i++){
           console.log(text[i].getAttribute("href"));// outputs: "API Hyperlinks"
            }
            
    });
 
    it ('should inject sample text into the searchbar',()=>{
        const searchterm= $('.algolia-autocomplete > input');
        searchterm.setValue('Selenuim');
        console.log("search term visage");
        browser.pause(3000);
        const displaybar = $('#algolia-autocomplete-listbox-0 > div')
        console.log(displaybar.isDisplayed());

    });

    it ('should navigate the hyperlinks referenced in the navigation bar',()=>{
        const text = $$('.fixedHeaderContainer > div > header > div > .slidingNav > ul > li> a');
        text.forEach(text => {
          text.click();
          console.log('link accessed')
          browser.back();

        });
    })
   



})
