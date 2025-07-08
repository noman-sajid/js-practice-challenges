function findUserByAge(users, targetAge) {
  const foundUser = users.find(function(user) {
    return user.age >= targetAge;
  });
  return foundUser;
}

const userList = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
  { name: "David", age: 30 },
  { name: "Eve", age: 35 }
];

console.log("User List:", userList);

const firstAdult = findUserByAge(userList, 18);
console.log("First user >= 18:", firstAdult);

const firstSenior = findUserByAge(userList, 60);
console.log("First user >= 60:", firstSenior);

const firstThirtyYearOld = findUserByAge(userList, 30);
console.log("First user >= 30:", firstThirtyYearOld);

