Can you write a function that takes an array of names and prints a greeting for each name using .forEach()?

Imagine you’re building a notification system. How would you send a greeting or log a message for each user?
namesArray.forEach(name => console.log(`Hello, ${name}!`));

What’s the difference between .forEach() and .map()?

How would you do the same thing with a for loop instead of .forEach()?
for (let i = 0; i < namesArray.length; i++) {
  console.log(`Hello, ${namesArray[i]}!`);
}

"Does .forEach() return anything?" → No, it always returns undefined.

"Can .forEach() be stopped early like break in a loop?" → No, unlike for or while, it cannot be exited early.

"What happens if the array is empty?"

The function runs with zero iterations — nothing is logged, no error occurs.

Time Complexity O(n)