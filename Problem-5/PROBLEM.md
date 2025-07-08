Given an array of numbers, write a function that returns a new array where each number is doubled.

How would you use the .map() method to transform an array of values?

Imagine you're given an array of prices. How would you increase each by 20%?


🔹 5. Follow-up Questions
After you solve it, they may ask:

What’s the time complexity of your solution? → O(n)

Does .map() mutate the original array? → No, it returns a new one.

Can this be written using an arrow function? → Yes:

javascript
Copy
Edit
const doubled = numbers.map(num => num * 2);