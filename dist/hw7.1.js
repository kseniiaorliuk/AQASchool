// class UIComponent {
//   constructor(protected locator: string) {}
//   public click(): void {
//     console.log(`Clicked on component with locator: ${this.locator}`)
//   }
// }
// class Button extends UIComponent {}
// class Input extends UIComponent {
//   private currentValue: string = ''
//   public setValue(text: string): this {
//     this.currentValue = text
//     return this
//   }
//   public getValue(): string {
//     return this.currentValue
//   }
// }
// const button = new Button('login-button')
// const input = new Input('description-input')
// console.log("--- Button Action ---");
// button.click();
// input.setValue("It is a beautiful day!").click();
// console.log("\n--- Verification ---");
// console.log('Current input value:', input.getValue())
