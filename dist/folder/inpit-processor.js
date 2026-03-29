function processInput(input) {
    if (typeof input === 'string') {
        return input.toUpperCase();
    }
    else if (input instanceof Date) {
        return input.toUTCString();
    }
    else {
        return input.reduce((sum, num) => sum + num, 0);
    }
}
const variableString = 'abcd';
const variableDate = new Date();
const variableArray = [1, 2, 3, 4];
console.log(processInput(variableString));
console.log(processInput(variableDate));
console.log(processInput(variableArray));
