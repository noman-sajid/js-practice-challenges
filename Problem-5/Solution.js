function doubleNumbers(numbers) {
  const doubled = numbers.map(function(number) {
    return number * 2;
  });
  return doubled;
}

const originalNumbers = [1, 2, 3, 4, 5];
const newNumbers = doubleNumbers(originalNumbers);

console.log("Original Numbers:", originalNumbers);
console.log("Doubled Numbers:", newNumbers);