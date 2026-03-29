const user = {
    name: 'Daniel',
    age: 26,
    getGreeting: function () {
        return `Hello, my name is ${this.name}.`;
    },
};
function processUser(user) {
    // Bug 1: Typo in a standard method name.
    const announcement = 'Processing user data...';
    console.log(announcement.toLocaleLowerCase());
    // Bug 2: Trying to access a property that doesn't exist.
    console.log(`User's name: ${user.name}`);
    // Bug 3: Forgetting to call a function/method.
    const greeting = user.getGreeting();
    if (greeting) {
        console.log('Greeting function exists.');
    }
}
processUser(user);
