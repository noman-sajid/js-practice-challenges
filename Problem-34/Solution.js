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





function removeDuplicatesWithSet(arr) {
  return [...new Set(arr)];
}

const arr = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicatesWithSet(arr));