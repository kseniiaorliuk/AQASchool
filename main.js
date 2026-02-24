import { fetchUsers } from './api.js'

async function runAppLogic() {
  try {
    const users = await fetchUsers()

    const activeUsers = users.filter(function (user) {
      return user.isActive === true
    })

    const formattedUsers = activeUsers.map(function (user) {
      return `Name: ${user.name}, Email: ${user.email}`
    })

    formattedUsers.forEach(function (line) {
      console.log(line)
    })
  } catch (error) {
    console.log('Error: Could not fetch user data.')
  }
}

runAppLogic()
