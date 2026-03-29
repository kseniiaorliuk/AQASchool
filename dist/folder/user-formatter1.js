function formatUser2(user) {
    let summary;
    if (user.occupation) {
        const occupationUpper = user.occupation.toUpperCase();
        return (summary = `${user.name} (${user.age}) works as a ${occupationUpper}.`);
    }
    else {
        return (summary = `${user.name} (${user.age}) is currently unemployed.`);
    }
}
const user1 = {
    name: 'Alice',
    age: 30,
    occupation: 'Engineer',
};
const user2 = { name: 'Bob', age: 25 };
console.log(formatUser2(user1));
console.log(formatUser2(user2));
