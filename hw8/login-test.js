"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_page_1 = require("./login-page");
var loginElements = {
    usernameInput: '#username',
    passwordInput: '#password',
    submitButton: '#buttonLogin',
};
var loginPage = new login_page_1.default(loginElements); // Створила сторінку
loginPage.performLogin('admin', 'pass123!'); // Запуск тесту
