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
    return this.currentValue
  }
}

const button = new Button('login-button')
const input = new Input('description-input')

input.setValue('This is my description').click()
console.log('Current input value:', input.getValue())
