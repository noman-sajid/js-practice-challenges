function manageCustomerQueue() {
  const customerQueue = []; // Represents our queue of customers

  console.log("Initial queue:", customerQueue);

  // Add customers to the beginning of the queue (not typical queue behavior, but for demonstration)
  customerQueue.unshift("Customer A");
  console.log("After unshift 'Customer A':", customerQueue);

  customerQueue.unshift("Customer B");
  console.log("After unshift 'Customer B':", customerQueue);

  customerQueue.unshift("Customer C");
  console.log("After unshift 'Customer C':", customerQueue);

  // Remove a customer from the beginning of the queue
  const firstCustomer = customerQueue.shift();
  console.log("Shifted customer:", firstCustomer);
  console.log("Queue after shift:", customerQueue);

  const anotherFirstCustomer = customerQueue.shift();
  console.log("Shifted customer:", anotherFirstCustomer);
  console.log("Queue after second shift:", customerQueue);

  // What happens if you shift from an empty array?
  const shiftedFromEmpty = customerQueue.shift(); // Shift 'Customer A'
  console.log("Shifted customer:", shiftedFromEmpty);
  console.log("Queue after third shift:", customerQueue);

  const shiftedFromEmptyAgain = customerQueue.shift();
  console.log("Shifted from empty again:", shiftedFromEmptyAgain);
  console.log("Queue after shifting empty:", customerQueue);
}

manageCustomerQueue();
