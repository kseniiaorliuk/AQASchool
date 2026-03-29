function summarizeUserProfile(obj) {
    var _a;
    return `
User Summary:
ID: ${obj.id}
Email: ${(_a = obj.email) !== null && _a !== void 0 ? _a : 'N/A'}
Name: ${obj.username}
Created: ${obj.creationDate.toDateString()}
`;
}
const userWithoutEmail = {
    id: "123",
    username: "John Dou",
    creationDate: new Date()
};
const userWithEmail = {
    id: "124",
    email: "boris@gmail.com",
    username: "Boris Dou",
    creationDate: new Date()
};
console.log(summarizeUserProfile(userWithEmail));
console.log(summarizeUserProfile(userWithoutEmail));
