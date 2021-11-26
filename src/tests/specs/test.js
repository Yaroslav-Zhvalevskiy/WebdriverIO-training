const ui = require('../../app/ui');

describe('Testing the official WebdriverIO website', () => {

    beforeEach(function () {
        ui.fullScreen();
        ui.url('');
    });
    it('Test logos', () => {
        expect(ui.homePage.isDisplayed('mainLogo')).toBeTrue();
        expect(ui.header.isDisplayed('logo')).toBeTrue();
    });
    it('Test header', () => {
        ui.header.clickBy('menuItems', 'Docs');
        expect(ui.contentBoard.firstLevelHeader).toHaveText('Getting Started');
        ui.header.clickBy('menuItems', 2);
        expect(ui.contentBoard.firstLevelHeader).toHaveText('Introduction');
    });
    it('Test sidebar', () => {
        ui.header.clickBy('menuItems', 'Docs');
        ui.sidebar.clickBy('sidebarItems', 'Reporter');
        ui.sidebar.clickBy('sidebarSubItems', 'Allure Reporter');
        expect(ui.contentBoard.firstLevelHeader).toHaveText('Allure Reporter');
        ui.header.clickBy('menuItems', 2);
        ui.sidebar.clickBy('sidebarItems', 0);
        ui.sidebar.clickBy('sidebarSubItems', 2);
        expect(ui.contentBoard.firstLevelHeader).toHaveText('WebDriver Protocol');
    });
    it('Test footer', () => {
        ui.footer.scrollDown('footerItem');
        ui.footer.clickBy('footerItemsWithInternalLinks', 'Help');
        expect(ui.contentBoard.firstLevelHeader).toHaveText('Need Help?');
        ui.footer.scrollDown('footerItem');
        ui.footer.clickBy('footerItemsWithExternalLinks', 'Donate to WebdriverIO');
        expect(ui.getUrl() === 'https://opencollective.com/webdriverio');
    });
});

