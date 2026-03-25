type userID = number | string;

interface accountDetails {
  readonly id: userID;
  email?: string;
}

interface  UserProfile extends accountDetails {
username: string
creationDate: Date
}

function summarizeUserProfile(obj: UserProfile): string {
  return `
User Summary:
ID: ${obj.id}
Email: ${obj.email ?? 'N/A'}
Name: ${obj.username}
Created: ${obj.creationDate.toDateString()}
`
}

const userWithoutEmail: UserProfile = {
  id: "123",
  username: "John Dou",
  creationDate: new Date()
}

const userWithEmail: UserProfile = {
  id: "124",
  email: "boris@gmail.com",
  username: "Boris Dou",
  creationDate: new Date()
}

console.log(summarizeUserProfile(userWithEmail));
console.log(summarizeUserProfile(userWithoutEmail));

