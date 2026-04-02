// In login-page.ts:
// First, use an import type statement to import the LoginElements interface from page-types.ts. This is a compile-time-only import.
// Create and export default a class named LoginPage.
// The LoginPage class should have a private readonly property named elements of type LoginElements.
// The constructor should accept an object of type LoginElements and initialize the elements property.
// Implement a public method performLogin(username: string, password: string) that simulates the login process by logging messages to the console.

import type { LoginElements } from './page-types'

export default class LoginPage {
  private readonly elements: LoginElements

  constructor (elements: LoginElements) {
    this.elements = elements;
  }

public performLogin (username: string, password: string): void {
  console.log (`Input name ${username} into ${this.elements.usernameInput}`);
  console.log (`Input password ${password} into ${this.elements.passwordInput}`);
  console.log (`Click button ${this.elements.submitButton}`)
}
}
