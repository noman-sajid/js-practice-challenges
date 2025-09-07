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



// function isPrime(num) {
//   // Prime numbers must be greater than 1
//   if (num <= 1) {
//     return false;
//   }

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// // Example usage:
// console.log(isPrime(7));  // true
// console.log(isPrime(10)); // false
// console.log(isPrime(29)); // true
// console.log(isPrime(1));  // false





// function factorial(n){
//   if(n === 0 || n === 1){
//     return 1;
//   } else if(n < 0){
//     return "Undefined for negative numbers";
//   } else {
//     let result = 1;
//     for(let i = 2; i <= n; i++){
//       result *= i;
//     }
//     return result;}
// }


// console.log(factorial(5)) // 120
// console.log(factorial(0)) // 1
// console.log(factorial(-3)) // "Undefined for negative numbers"





// function isMissing(nums){
//    let missing = ''
//    if (nums.length === 0 || nums.length === 1) {
//     return "Not enough numbers to find a missing one.";
//   }
//    for(let i =1 ; i < nums.length -1 ; i++){
//          if (nums[i+1] - nums[i] !== 1) {
//               return nums[i] + 1;
//          }
//    }
//     return "No missing number found.";

// }



// console.log(isMissing([1, 2, 4, 5])); // Output: 3
// console.log(isMissing([10, 11, 12, 14])); // Output: 13
// console.log(isMissing([1, 2, 3, 4])); // Output: "No missing number found."



function isPalindrome(str){
   let reversed = '';
   for(let i = str.length - 1; i >= 0; i--){
      reversed += str[i]

   }
 
   if(reversed === str){
      return true;
   }
 return false;

}