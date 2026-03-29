var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UIComponent = /** @class */ (function () {
    function UIComponent(locator) {
        this.locator = locator;
    }
    UIComponent.prototype.click = function () {
        console.log("Clicked on component with locator: ".concat(this.locator));
        return this;
    };
    return UIComponent;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Button;
}(UIComponent));
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentValue = '';
        return _this;
    }
    Input.prototype.setValue = function (text) {
        this.currentValue = text;
        console.log("Value set to: ".concat(text));
        return this;
    };
    Input.prototype.getValue = function () {
        return this.currentValue;
    };
    return Input;
}(UIComponent));
var button = new Button('login-button');
var input = new Input('description-input');
input.setValue('This is my description').click();
console.log('Current input value:', input.getValue());
