

let basePageClass = class Page {

    open(path) {
        browser.url('/');
    }
    get headerItems() { return $$('.slidingNav > ul > li> a'); }
    get searchBar() { return $('.algolia-autocomplete > input'); }
    get displayBar() { return $('#algolia-autocomplete-listbox-0 > div'); }
    
}

module.exports.basePageClass = new basePageClass();
