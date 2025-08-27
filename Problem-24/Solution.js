function findMin(numbers) {
  let min = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }

  return min;
}

const nums = [3, 7, 2, 9, 5];
const result = findMin(nums);
console.log(result);
