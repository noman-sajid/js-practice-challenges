function sumArrayElements(numbers) {
  const sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0); // Initial value for accumulator
  return sum;
}

const dataPoints = [10, 5, 8, 12, 3];
const totalSum = sumArrayElements(dataPoints);

console.log("Data Points:", dataPoints);
console.log("Total Sum:", totalSum);
