
class BaseObject {
    isDisplayed(element) {
        return this[element].isDisplayed();
    }

    clickBy(elements, textOrPosition) {
        if (typeof textOrPosition === 'number') {
            this[elements][textOrPosition].click();
        } else {
            this[elements].find((el) => {
                return el.getText().trim() === textOrPosition;
            }).click();
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