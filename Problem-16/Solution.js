function sortNumbersAscending(numbers) {
  // The sort method modifies the array in place
  numbers.sort(function(a, b) {
    return a - b; // This defines the ascending order
  });
  return numbers; // Returns a reference to the modified array
}

const unsortedNumbers = [3, 1, 4, 1, 5, 9, 2, 6];
const sortedNumbers = sortNumbersAscending(unsortedNumbers);

console.log("Original Array (after sort):", unsortedNumbers); // Note: This will show the sorted version
console.log("Sorted Array:", sortedNumbers);

const anotherUnsorted = [10, 2, 8, 1, 5];
sortNumbersAscending(anotherUnsorted); // Call without assigning to a new variable
console.log("Another Sorted Array:", anotherUnsorted);
