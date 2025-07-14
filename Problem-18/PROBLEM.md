Write a function that takes an object and logs each of its property names and values




🔸 1. Basic Prompt
"How would you print all the properties and values of a JavaScript object?"

Expected Answer:

Use Object.keys() to get an array of property names.

Iterate using .forEach() or a for...of loop.

Access values with bracket notation: obj[key].

🔸 2. Looping Alternatives
"Can you do this using a for...in loop instead?"

Yes, but it also iterates inherited properties (unless filtered with hasOwnProperty()).


for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(`${key}: ${obj[key]}`);
  }
}
🔸 3. Use Case Framing
"Imagine you're given a dynamic user profile object. How would you display its key-value pairs to the user?"

Show a loop-based solution that doesn't hardcode the property names.

🔸 4. Non-Enumerable Keys Challenge
"What’s the difference between Object.keys() and Object.getOwnPropertyNames()?"

Object.keys() returns only enumerable keys.

Object.getOwnPropertyNames() returns all own properties, even non-enumerable ones.

🔸 5. Follow-Up Enhancements
"Can you also log the data type of each value?"


console.log(`${key}: ${value} (${typeof value})`);
