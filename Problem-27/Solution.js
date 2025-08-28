// Using a method
//  function calcAvg(numbers) {
//   const sum = numbers.reduce((acc, crrVal) => acc + crrVal, 0);
//   return sum / numbers.length;
// }
// const nums = [10, 20, 30, 40, 50]; 
// const avg = calcAvg(nums);
//  console.log("Average:", avg);


// Using a Loop


function calcAvgWithLoop(numbers){
  let sum = 0
  for(let i = 0; i < numbers.length; i++){
    sum = sum + numbers[i]
    
  }
  const average = sum / numbers.length
  return average 
}



// Do not edit below this line
const nums = [10, 20, 30, 40, 50];
const avg = calcAvgWithLoop(nums);
console.log("Average:", avg);