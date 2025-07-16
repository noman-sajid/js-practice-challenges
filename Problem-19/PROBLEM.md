"Write a function that takes an object and returns an array containing all its values,


🔸 1. Direct Question
"How can you retrieve all the values from a JavaScript object?"

Expected answer: Use Object.values(obj).

🔸 2. Functional Question
"Write a reusable function that accepts any object and returns its values as an array."

This is exactly what your getObjectValues() function does.

🔸 3. Behavioral Prompt
"Given a dynamic object like user settings or product details, how can you extract just the values?"

You can explain:

Use Object.values() for quick extraction

Returns an array that you can further manipulate (e.g., map, filter)

🔸 4. Array Manipulation Follow-Up
"After retrieving object values, how would you count how many are strings?"


const values = Object.values(book);
const stringCount = values.filter(val => typeof val === 'string').length;
🔸 5. Comparison Question
"What’s the difference between Object.values() and Object.keys()?"

Method	Returns
Object.keys()	Array of property names
Object.values()	Array of property values
Object.entries()	Array of [key, value] pairs

🔸 6. Edge Case
"What does Object.values() return for an empty object?"

Answer:


Object.values({}); // returns []