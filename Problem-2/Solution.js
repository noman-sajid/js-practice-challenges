function greetUser(name, greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

console.log(greetUser("Alice"));
console.log(greetUser("Bob", "Hi"));
console.log(greetUser("Charlie", "Greetings"));