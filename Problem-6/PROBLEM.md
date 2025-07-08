You are given an array of strings (words). Your task is to write a function that selects only those words that meet a certain minimum length requirement.

Write a function that filters out all words shorter than a given minimum length.

How would you return a new array containing only elements that satisfy a specific condition?

Can you show how to use .filter() to solve a real-world problem?

Imagine you're building a search suggestion feature. How would you remove words that are too short to be meaningful?


🔹 5. Follow-Up/Stretch Questions
After you solve it, they may ask:

“Can you rewrite this with an arrow function?”

const longWords = words.filter(word => word.length >= minLength);
“Can you make it case-insensitive and check for alphabetic characters only?”

“What’s the time complexity?” → O(n) since .filter() iterates once.