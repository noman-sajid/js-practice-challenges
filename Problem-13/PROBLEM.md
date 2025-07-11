"Write a function that checks if any user in a list is currently active.


🔸 1. Behavioral Requirement
"Given a list of users, how would you check if at least one is active?"

This is the core concept tested here.

🔸 2. Higher-Order Function Focus
"What JavaScript array method would you use to check if any object in an array matches a condition?"

Expected answer: .some()

🔸 3. Efficiency-Oriented Question
"What is the benefit of using .some() over .filter().length > 0?"

Answer:

.some() is more efficient because it short-circuits — it stops checking once a match is found.

.filter() checks all elements even if the first one matches.

🔸 4. Edge Case Awareness
"What happens if the array is empty?"

Answer: .some() returns false if the array is empty — no elements can satisfy the condition.

🔸 5. Alternative Approach Challenge
"Can you solve this using a loop instead of .some()?"

Example:

javascript
Copy
Edit
function hasActiveUser(users) {
  for (let user of users) {
    if (user.isActive) return true;
  }
  return false;
}
📊 Time Complexity
Best Case (first match): O(1)

Worst Case (no match): O(n)

Average Case: Often better than .filter() because of short-circuiting

