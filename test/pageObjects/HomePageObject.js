

let basePageClass = class Page {

    open(path) {
        browser.url('/');
    }
    
    get navbarTitles() { return $$('.slidingNav > ul > li> a'); }
    get searchBar() { return $('.algolia-autocomplete > input'); }
    get displayBar() { return $('#algolia-autocomplete-listbox-0 > div'); }
    //get hyperlink(index){ return (`.slidingNav > ul > li:nth-of-type(${index}) > a`);}
    
}

module.exports.basePageClass = new basePageClass();
