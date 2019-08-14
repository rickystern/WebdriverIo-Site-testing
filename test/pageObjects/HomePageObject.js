

let basePageClass = class Page {
    get headerItems() { return $$('.slidingNav > ul > li> a'); }
    get searchBar() { return $('.algolia-autocomplete > input'); }
    get displayBar() { return $('#algolia-autocomplete-listbox-0 > div'); }

     open(path) {
        browser.url('/');
    }
}

module.exports.basePageClass = new basePageClass();
