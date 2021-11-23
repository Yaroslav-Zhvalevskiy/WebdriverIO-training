const Header = require('./objects/controls/header');

class Ui {
    header = new Header();

    url(url) {
        browser.url(url);
    }

    pause(ms) {
        browser.pause(ms);
    }
}

module.exports = new Ui();