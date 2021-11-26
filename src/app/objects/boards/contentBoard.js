const BaseObject = require('../baseObject');

class ContentBoard extends BaseObject {
    constructor() {
        super();
    }
    get firstLevelHeader() { return $('.docMainContainer_3ufF h1') }
}

module.exports = ContentBoard;