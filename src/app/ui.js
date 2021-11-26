const Header = require('./objects/controls/header');
const Sidebar = require('./objects/controls/sidebar');
const ContentBoard = require('./objects/boards/contentBoard');
const HomePage = require('./objects/basePage/homePage');
const Footer = require('./objects/controls/footer');

class Ui {
    header = new Header();
    sidebar = new Sidebar();
    contentBoard = new ContentBoard();
    homePage = new HomePage();
    footer = new Footer();

    fullScreen() {
        browser.maximizeWindow();
    }

    url(url) {
        browser.url(url);
    }

    getUrl() {
        browser.getUrl();
    }

    pause(ms) {
        browser.pause(ms);
    }
}

module.exports = new Ui();