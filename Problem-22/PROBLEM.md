"What is a queue and how is it implemented in JavaScript?"

Expected: Explain that a queue is a FIFO structure, and in JavaScript, it can be implemented using arrays with .push() + .shift() or .unshift() + .pop() — although .push() + .shift() is more common.

"What’s the difference between .shift() and .pop()?"

.shift() removes the first element, .pop() removes the last.

"Is unshift + shift an ideal way to implement a queue?"

Not really — using .push() to add to the end and .shift() to remove from the start is closer to real queue behavior. Using .unshift() is more like adding people to the front of a line (backwards).

💻 Code-Based or Practical Questions
"Here's a function that uses unshift and shift on an array. What is the output?"

You could be asked to walk through the logs and show how the array changes.

"What will happen if .shift() is called on an empty array?"

It will return undefined. No error will be thrown.

"Can you write a function to simulate a customer service line (queue) using JavaScript arrays?"

This exact function (perhaps with .push() instead of .unshift()) would be expected.

🛠️ Follow-up or Refactor Tasks
"Refactor this to use .push() and .shift() instead. Why is that more natural for a queue?"

Because .push() adds to the back of the line, and .shift() removes from the front — like a real-world queue.

"What’s the time complexity of .shift() and .unshift() in JavaScript arrays?"

Both are O(n) because all other elements have to be reindexed. This is a good opportunity to discuss efficiency.

"Can you implement a custom Queue class in JavaScript with methods like enqueue, dequeue, peek, and isEmpty?"

That would be a great next-level test.

