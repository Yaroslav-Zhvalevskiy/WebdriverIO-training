const ui = require('../../app/ui');

describe('desc', () => {
    it('test', () => {
        ui.fullScreen();
        ui.url('');
        expect(ui.homePage.isDisplayed('mainLogo')).toBeTrue();
        expect(ui.header.isDisplayed('logo')).toBeTrue();
        ui.header.clickBy('menuItems', 'Docs');
        ui.pause(2000);
        expect(ui.contentBoard.firstLevelHeader).toHaveText('Getting Started');
        ui.sidebar.clickByText('sidebarItems', 'Reporter');
        ui.pause(2000);
        ui.sidebar.clickByText('sidebarSubItems', 'Allure Reporter');
        ui.pause(2000);
        expect(ui.contentBoard.firstLevelHeader).toHaveText('Allure Reporter');
        ui.header.clickBy('menuItems', 2);
        ui.pause(2000);
        expect(ui.contentBoard.firstLevelHeader).toHaveText('Introduction');
        ui.sidebar.clickByPos('sidebarItems', 0);
        ui.pause(2000);
        ui.sidebar.clickByPos('sidebarSubItems', 6);
        ui.pause(2000);
        expect(ui.contentBoard.firstLevelHeader).toHaveText('Firefox');
        ui.footer.scrollDown('footerItem');
        ui.pause(2000);
        ui.footer.clickByText('footerItemsWithInternalLinks', 'Help')
        ui.pause(2000);
        expect(ui.contentBoard.firstLevelHeader).toHaveText('Need Help?');
        ui.footer.scrollDown('footerItem');
        ui.pause(2000);
        ui.footer.clickByText('footerItemsWithExternalLinks', 'Donate to WebdriverIO');
        ui.pause(5000);
        expect(ui.getUrl() === 'https://opencollective.com/webdriverio');
    });
});

