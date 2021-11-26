const BaseObject = require('../baseObject');

class HomePage extends BaseObject {
    constructor() {
        super();
    }
    get mainLogo() { return $('.svg_2wOt') }
}

module.exports = HomePage;