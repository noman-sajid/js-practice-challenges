function hasActiveUser(users) {
  const anyActive = users.some(function(user) {
    return user.isActive === true;
  });
  return anyActive;
}

const userDatabase = [
  { id: 1, name: "Alice", isActive: false },
  { id: 2, name: "Bob", isActive: true },
  { id: 3, name: "Charlie", isActive: false },
  { id: 4, name: "David", isActive: true }
];

const emptyDatabase = [];
const allInactiveDatabase = [
  { id: 5, name: "Eve", isActive: false },
  { id: 6, name: "Frank", isActive: false }
];

console.log("User Database:", userDatabase);
console.log("Are there any active users in userDatabase?", hasActiveUser(userDatabase));

console.log("\nEmpty Database:", emptyDatabase);
console.log("Are there any active users in emptyDatabase?", hasActiveUser(emptyDatabase));

console.log("\nAll Inactive Database:", allInactiveDatabase);
console.log("Are there any active users in allInactiveDatabase?", hasActiveUser(allInactiveDatabase));
