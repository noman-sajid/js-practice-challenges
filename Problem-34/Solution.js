// function isEvenOrOdd(number){
//     if(number % 2 === 0){
//         return "Even"
//     } else {
//         return "Odd"
//     }
  
// }

// console.log(isEvenOrOdd(4)) // "Even"
// console.log(isEvenOrOdd(7)) // "Odd"
// console.log(isEvenOrOdd(0)) // "Even"



// function findLargestNumber(numbers){
//     let largest = numbers[0];
//     for(let i = 1; i < numbers.length; i++){
//         if(numbers[i] > largest){
//             largest = numbers[i];
//         }
//     }
// }


// function reverseString(str){
//     let reversed = "";
//     for(let i = str.length - 1; i >= 0; i--){
//         reversed += str[i];
//     }
// }



// function fizzBuzz(n){
//     let result = [];
//     for(let i = 0; i < n; i++){
//         if(i % 3 === 0 && i % 5 === 0){
//             result.push("FizzBuzz");
//         }   else if(i % 3 === 0){  
//             result.push("Fizz");
//         }   else if(i % 5 === 0){
//             result.push("Buzz");
//         }   else {
//             result.push(i);
//         }
//     }
// }




// function countVowels(str){
//     let count = 0; 
//     const vowels = "aeiouAEIOU";
//     for(let char of str){
//         if(vowels.includes(char)){
//             count++;
//         }
//     }
// }




// function removeDuplicates(arr) {
//   let uniqueArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!uniqueArr.includes(arr[i])) {
//       uniqueArr.push(arr[i]);
//     }
//   }
//   return uniqueArr;
// }

// const arr = [1, 2, 2, 3, 4, 4, 5];
// console.log(removeDuplicates(arr)); 





// function removeDuplicatesWithSet(arr) {
//   return [...new Set(arr)];
// }

// const arr = [1, 2, 2, 3, 4, 4, 5];
// console.log(removeDuplicatesWithSet(arr));



// function findSmallestNumber(nums){
     
//      let SmallestNum = nums[0];
//      for(num of nums){
//           if(num < SmallestNum){
//                SmallestNum = num;
//           }
//      } 
//      return SmallestNum;
// }

// console.log(findSmallestNumber([2, 5, 1, 9, 3]))



function isPrime(num) {
  // Prime numbers must be greater than 1
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Example usage:
console.log(isPrime(7));  // true
console.log(isPrime(10)); // false
console.log(isPrime(29)); // true
console.log(isPrime(1));  // false