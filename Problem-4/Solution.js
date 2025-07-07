function updateProfile(user, key, newValue) {
  user[key] = newValue;
}

const userProfile = {
  name: "Jane Doe",
  age: 30,
  email: "jane.doe@example.com",
  isActive: true
};

console.log("Original Profile:", userProfile);

updateProfile(userProfile, "age", 31);
updateProfile(userProfile, "email", "jane.d@newdomain.com");
updateProfile(userProfile, "city", "New York"); // Adding a new property

console.log("Updated Profile:", userProfile);
