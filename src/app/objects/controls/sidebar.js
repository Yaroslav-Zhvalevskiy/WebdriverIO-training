const BaseObject = require('../baseObject');

class Sidebar extends BaseObject {
    constructor() {
        super();
    }
    get sidebarItems() { return $$('.menu__link.menu__link--sublist') }
    get sidebarSubItems() { return $$('.theme-doc-sidebar-item-link a') }
}

module.exports = Sidebar;