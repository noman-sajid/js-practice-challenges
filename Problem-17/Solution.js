function getShallowCopy(originalArray) {

  const copyArray = [...originalArray];
  return copyArray;
}

const originalScores = [85, 92, 78, 95];
const scoresCopy = getShallowCopy(originalScores);

console.log("Original Scores:", originalScores);
console.log("Scores Copy:", scoresCopy);

// Demonstrate that modifying the copy does not affect the original (for primitive values)
scoresCopy[0] = 100;
console.log("\nAfter modifying copy[0]:");
console.log("Original Scores:", originalScores); // Should still be [85, 92, 78, 95]
console.log("Scores Copy:", scoresCopy);       // Should be [100, 92, 78, 95]

// What if the array contains objects? (concept for your explanation)
const originalUsers = [{id: 1, name: "Alice"}, {id: 2, name: "Bob"}];
const usersCopy = getShallowCopy(originalUsers);
usersCopy[0].name = "Alicia"; // Modifying an object within the shallow copy

console.log("\nAfter modifying object in copy[0]:");
console.log("Original Users:", originalUsers); // What will happen here?
console.log("Users Copy:", usersCopy);
