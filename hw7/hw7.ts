class UIComponent {
  constructor(protected locator: string) {}

  public click(): this {
    console.log(`Clicked on component with locator: ${this.locator}`)
    return this
  }
}
class Button extends UIComponent {}

class Input extends UIComponent {
  private currentValue: string = ''

  public setValue(text: string): this {
    this.currentValue = text
    console.log(`Value set to: ${text}`)
    return this
  }

  public getValue(): string {
    console.log(`Retrieving value: ${this.currentValue}`)
    return this.currentValue
  }
}

const button = new Button('login-button').click()
const input = new Input('description-input')

console.log('--- Button Action ---')
button.click().click().click()

input.setValue('This is my description').click()

console.log('\n--- Verification ---')
console.log('Current input value:', input.getValue())
