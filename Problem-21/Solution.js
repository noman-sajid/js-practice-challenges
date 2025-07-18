function manageTaskStack() {
  const taskStack = []; // Represents our stack of tasks

  console.log("Initial stack:", taskStack);

  // Add tasks to the end of the stack
  taskStack.push("Task A");
  console.log("After push 'Task A':", taskStack);

  taskStack.push("Task B");
  console.log("After push 'Task B':", taskStack);

  taskStack.push("Task C");
  console.log("After push 'Task C':", taskStack);

  // Remove a task from the end of the stack
  const lastTask = taskStack.pop();
  console.log("Popped task:", lastTask);
  console.log("Stack after pop:", taskStack);

  const anotherLastTask = taskStack.pop();
  console.log("Popped task:", anotherLastTask);
  console.log("Stack after second pop:", taskStack);

  // What happens if you pop from an empty array?
  const poppedFromEmpty = taskStack.pop(); // Pop 'Task A'
  console.log("Popped task:", poppedFromEmpty);
  console.log("Stack after third pop:", taskStack);

  const poppedFromEmptyAgain = taskStack.pop();
  console.log("Popped from empty again:", poppedFromEmptyAgain);
  console.log("Stack after popping empty:", taskStack);
}

manageTaskStack();