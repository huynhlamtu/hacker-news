const users = [
  {
    _id: "3324231",
    name: "John Doe",
    username: "johndoe123",
    password: "123456",
  },
  {
    _id: "3324232",
    name: "Sam Smith",
    username: "samsam12",
    password: "123456",
  },
  {
    _id: "3324233",
    name: "Rihana",
    username: "balgari",
    password: "123456",
  },
];

export function checkLogin(user) {
  const FoundedUser = users.filter(
    (u) => u.username === user.username && user.password === u.password
  );

  if (!FoundedUser.length) {
    return false;
  }
  return FoundedUser;
}
