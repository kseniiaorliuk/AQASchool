"use strict";
// In login-page.ts:
// First, use an import type statement to import the LoginElements interface from page-types.ts. This is a compile-time-only import.
// Create and export default a class named LoginPage.
// The LoginPage class should have a private readonly property named elements of type LoginElements.
// The constructor should accept an object of type LoginElements and initialize the elements property.
// Implement a public method performLogin(username: string, password: string) that simulates the login process by logging messages to the console.
Object.defineProperty(exports, "__esModule", { value: true });
var LoginPage = /** @class */ (function () {
    function LoginPage(elements) {
        this.elements = elements;
    }
    LoginPage.prototype.performLogin = function (username, password) {
        console.log("Input name ".concat(username, " into ").concat(this.elements.usernameInput));
        console.log("Input password ".concat(password, " into ").concat(this.elements.passwordInput));
        console.log("Click button ".concat(this.elements.submitButton));
    };
    return LoginPage;
}());
exports.default = LoginPage;
