const ui = require('../../app/ui');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        ui.url('');
        expect(ui.header.isDisplayed('logo')).toBeTrue();
        ui.header.clickBy('menuItems', 'Docs');
        ui.pause(5000);
    });
});

