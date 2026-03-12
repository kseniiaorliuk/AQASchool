//export function fetchUsers()

const users = [
  { name: 'Alice', email: 'Alice@gmail.com', isActive: true },
  { name: 'Bob', email: 'Bob@gmail.com', isActive: true },
  { name: 'Charlie', email: 'Charlie@gmail.com', isActive: false },
  { name: 'Rob', email: 'Rob@gmail.com', isActive: true },
]

export function fetchUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() < 0.7
      if (!isSuccess) {
        reject(new Error())
      } else resolve(users)
    }, 2000)
  })
}
