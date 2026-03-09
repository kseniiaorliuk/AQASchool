type ProcessableInput = string | Date | number[]

function processInput(input: ProcessableInput) {
  if (typeof input === 'string') {
    return input.toUpperCase()
  } else if (input instanceof Date) {
    return input.toUTCString()
  } else {
    return input.reduce((sum, num) => sum + num, 0)
  }
}

const variableString: string = 'abcd'
const variableDate: Date = new Date()
const variableArray: number[] = [1, 2, 3, 4]

console.log(processInput(variableString))
console.log(processInput(variableDate))
console.log(processInput(variableArray))
