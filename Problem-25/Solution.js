// function findMinMax(numbers) {
//   let min = numbers[0];
//   let max = numbers[0];

//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] < min) {
//       min = numbers[i];
//     }
//     if (numbers[i] > max) {
//       max = numbers[i];
//     }
//   }

//   return { min, max };
// }

// const nums = [3, 7, 2, 9, 5];
// const result = findMinMax(nums);
// console.log(result); 
// // 



// Modern Way to do it
function findMinMax(numbers) {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  return { min, max };
}

const nums = [3, 7, 2, 9, 5];
const result = findMinMax(nums);
console.log(result);
// ✅ { min: 2, max: 9 }
