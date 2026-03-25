import { fetchUsers } from './api.js'

async function runAppLogic() {
  try {
    const users = await fetchUsers()

    const activeUsers = users.filter(function (user) {
      return user.isActive === true
    });

    const formattedUsers = activeUsers.map(function (user) {
      return `Name: ${user.name}, Email: ${user.email}`
    });

    formattedUsers.forEach(function (line) {
      console.log(line)
    });

  } catch (error) {
    console.log('Error: Could not fetch user data.' + error.message)//тут можна вивести більш детальну інформацію про помилку, використовуючи властивість message об'єкта помилки. Це те що ти питала, щоб виводило більш детальну інформацію про помилку (яку ми створили в api.js, коли reject(new Error("Упс, щось пішло не так! Але наступного разу все буде добре.")). Тобто тепер, якщо помилка виникне, ми отримаємо більш конкретне повідомлення про те, що саме пішло не так.
  }
}

runAppLogic();//не забуваймо про двокрапку та коми, там де треба