// Using a method
 function calcAvg(numbers) {
  const sum = numbers.reduce((acc, crrVal) => acc + crrVal, 0);
  return sum / numbers.length;
}
const nums = [10, 20, 30, 40, 50]; 
const avg = calcAvg(nums);
 console.log("Average:", avg);