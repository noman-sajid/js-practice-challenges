How can you create a shallow copy of an array in JavaScript? Demonstrate how modifying the copy affects or does not affect the original.




🔸 1. Shallow Copy Basics
"What is a shallow copy in JavaScript, and how do you create one?"

Answer: A shallow copy creates a new array or object, but its elements or properties still reference the same underlying values (especially if they're objects).

Method: const copy = [...array] or array.slice().

🔸 2. Demonstrate Copy Behavior
"If you change a value in the copied array, does it affect the original?"

For primitive values → No.

For objects inside an array → Yes, because both copies point to the same object reference.

🔸 3. Reference vs. Primitive Types
"Why does changing usersCopy[0].name also affect originalUsers?"

Because usersCopy[0] and originalUsers[0] both point to the same object in memory.

🔸 4. Deep Copy Challenge (Follow-Up)
"How would you prevent this reference issue and create a true deep copy?"

Basic Approach:

javascript
Copy
Edit
const deepCopy = JSON.parse(JSON.stringify(originalArray));
⚠️ Limitations:

This approach doesn’t work with functions, undefined, Date, Map, Set, etc.

