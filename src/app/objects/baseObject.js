
class BaseObject {
    isDisplayed(element) {
        return this[element].isDisplayed();
    }

    clickBy(elements, textOrPosition) {
        if (typeof textOrPosition === 'number') {
            this.clickByPos(elements, textOrPosition);
        } else {
            this.clickByText(elements, textOrPosition);
        }
    }

    clickByText(elements, text) {
        this[elements].find((el) => {
            return el.getText() === text;
        }).click();
    }

    clickByPos(elements, position) {
        this[elements][position].click();
    }

    scrollDown(element) {
        this[element].scrollIntoView();
    }
}

module.exports = BaseObject;