Write a function that takes an array of numbers and returns the sum of all elements using the .reduce() method.


How would you use .reduce() to transform or aggregate values in an array?

Imagine you're analyzing data points from a sensor. How would you calculate the total output over time?

What happens if the array is empty?

🔸 1. General Functional Concept
"How would you use .reduce() to transform or aggregate values in an array?"

Expectation: Mention summing, averaging, or converting arrays to single values (like objects).

🔸 2. Real-World Scenario
"Imagine you're analyzing data points from a sensor. How would you calculate the total output over time?"

Tests ability to apply array operations to domain problems.

🔸 3. Alternative Approaches
"Can you solve the same problem without using .reduce()?"

Example using a loop:

javascript
Copy
Edit
let sum = 0;
for (let num of numbers) {
  sum += num;
}
🔸 4. Arrow Function Variation
"Can you rewrite your .reduce() solution using an arrow function?"

javascript
Copy
Edit
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
🔸 5. Edge Case Awareness
"What happens if the array is empty?"

Answer: The .reduce() method returns the initial value (0 in this case).

If no initial value is provided and the array is empty → TypeError.

🔸 6. Time and Space Complexity
"What is the time complexity of your solution?"

Answer: O(n) — .reduce() processes each item once.

Space: O(1) — only one accumulator variable used.

🔸 7. Bonus Variation
"How would you compute the average using .reduce()?"

javascript
Copy
Edit
const numbers = [10, 5, 8, 12, 3];
const average = numbers.reduce((acc, curr, i, arr) => {
  acc += curr;
  if (i === arr.length - 1) return acc / arr.length;
  return acc;
}, 0);
