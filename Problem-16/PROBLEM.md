Write a function that takes an array of numbers and returns the array sorted in ascending order.


🔸 1. Behavioral Rephrasing
"How would you sort an array of numbers in ascending order in JavaScript?"

Expected Answer:

javascript
Copy
Edit
array.sort((a, b) => a - b);
🔸 2. Explanation-Based
"Why do we need to pass a compare function to .sort() when sorting numbers?"

Answer:

Without a compare function, .sort() treats values as strings, leading to incorrect ordering like [1, 10, 2].

🔸 3. Side Effect Awareness
"Does the .sort() method mutate the original array or return a new one?"

Answer:

.sort() modifies the array in-place and returns a reference to the same array.

🔸 4. Immutable Variant Challenge
"How would you sort the array without mutating the original?"

javascript
Copy
Edit
const sortedCopy = [...numbers].sort((a, b) => a - b);
🔸 5. Descending Sort (Follow-up)
"Can you modify your function to sort in descending order instead?"

javascript
Copy
Edit
function sortDescending(numbers) {
  return numbers.sort((a, b) => b - a);
}
