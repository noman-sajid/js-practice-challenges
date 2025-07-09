function logNames(namesArray) {
  namesArray.forEach(function(name) {
    console.log(`Hello, ${name}!`);
  });
}

const userNames = ["Alice", "Bob", "Charlie", "David"];

console.log("--- Logging User Names ---");
logNames(userNames);
console.log("--- Finished Logging ---");