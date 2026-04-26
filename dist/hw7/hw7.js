class UIComponent {
    constructor(locator) {
        this.locator = locator;
    }
    //public click(): void {
    click() {
        console.log(`Clicked on component with locator: ${this.locator}`);
        return this;
    }
}
class Button extends UIComponent {
}
class Input extends UIComponent {
    constructor() {
        super(...arguments);
        this.currentValue = '';
    }
    setValue(text) {
        this.currentValue = text;
        console.log(`Value set to: ${text}`);
        return this;
    }
    getValue() {
        console.log(`Retrieving value: ${this.currentValue}`);
        return this.currentValue;
    }
}
const button = new Button('login-button');
const input = new Input('description-input');
console.log('--- Button Action ---');
button.click().click();
input.setValue('This is my description').click();
console.log('\n--- Verification ---');
console.log('Current input value:', input.getValue());
