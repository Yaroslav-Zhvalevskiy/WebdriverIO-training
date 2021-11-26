const BaseObject = require('../baseObject');

class Header extends BaseObject {
    constructor() {
        super();
    }
    get logo() { return $('.navbar__logo') }
    get menuItems() { return $$('.navbar__items a') }
}

module.exports = Header;