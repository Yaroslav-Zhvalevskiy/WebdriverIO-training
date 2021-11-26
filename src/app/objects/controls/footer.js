const BaseObject = require('../baseObject');

class Footer extends BaseObject {
    constructor() {
        super();
    }
    get footerItemsWithInternalLinks() { return $$('.footer__link-item[href^="/"]') }
    get footerItemsWithExternalLinks() { return $$('.footer__item span') }
    get footerItem() { return $('.footer__link-item[href="/community/support"]') }
}

module.exports = Footer;