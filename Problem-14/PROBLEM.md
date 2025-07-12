"Write a function that checks if all elements in an array of ages are greater than or equal to a specified minimum age.


🔸 1. General Array Validation
"How would you check if all items in an array satisfy a specific condition?"

This can lead to using .every(), and you can explain that it returns true only if all items pass the test.

🔸 2. Real-World Scenario
"In a form submission, you receive a list of student ages. How would you validate that all students are at least 18?"

This helps frame your function in a practical use case.

🔸 3. Behavior on Empty Arrays
"What does .every() return for an empty array?"

Answer: true

Reason: This is known as vacuous truth — since there are no elements that violate the condition, it is technically true.

🔸 4. Alternative Approach Challenge
"Can you write the same logic without using .every()?"

Example with loop:

javascript
Copy
Edit
function areAllAgesValid(ages, minAge) {
  for (let age of ages) {
    if (age < minAge) return false;
  }
  return true;
}
🔸 5. Follow-Up Questions
Question	Expected Answer
Can .every() be short-circuited?	Yes, it stops when a condition fails.
Is .every() more efficient than .filter().length === array.length?	Yes, because it exits early on failure.
Is .every() a mutating method?	No, it does not change the original array.