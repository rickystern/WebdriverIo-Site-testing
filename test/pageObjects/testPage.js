const Page = require ('./HomePageObject');


class Test extends Page {
    get Navbar() {
       // return $('.slidingNav');
        open("/Guide")
    };
}

module.export = new Test();