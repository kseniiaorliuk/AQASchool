import LoginPage from './login-page'

const loginElements = {
  usernameInput: '#username',
  passwordInput: '#password',
  submitButton: '#buttonLogin',
}

const loginPage = new LoginPage(loginElements) // Створила сторінку

loginPage.performLogin('admin', 'pass123!') // Запуск тесту
