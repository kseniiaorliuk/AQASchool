//export function fetchUsers()

const users = [
  { name: 'Alice', email: 'Alice@gmail.com', isActive: true },
  { name: 'Bob', email: 'Bob@gmail.com', isActive: true },
  { name: 'Charlie', email: 'Charlie@gmail.com', isActive: false },
  { name: 'Rob', email: 'Rob@gmail.com', isActive: true }
];

export function fetchUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() < 0.7;

      if (!isSuccess) {//краще так не писати, типу поганий тон, !isSuccess -- тобто якщо не успішно. Зазвичай записують так: if (isSuccess) { resolve(users) } else {
        reject(new Error("Упс, щось пішло не так! Але наступного разу все буде добре."));
      } else resolve(users);
    }, 2000);
  });
}