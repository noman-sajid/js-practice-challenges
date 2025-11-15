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
//     for(let i = 1; i < n; i++){
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



// function isPalindrome(str){
//       const reversed = str.split('').reverse().join('');
//       if(reversed === str){
//             return true;
//       }

//       return false;

// }

// console.log(isPalindrome("racecar"))      
// console.log(isPalindrome("hello"))   




// function compressStr(str) {

//   let compressedList = [];
//   let count = 1;

//   if (str.length === 0) {
//     return "";
//   }

//   for (let i = 1; i <= str.length; i++) {
//     if (str[i] === str[i - 1]) {
//       count++;
//     } else {
//       compressedList.push(str[i - 1]);
//       compressedList.push(count);

//       count = 1;
//     }
//   }

//   let compressedStr = compressedList.join("");

//   return compressedStr.length < str.length ? compressedStr : str;
// }

// // Example Usage:
// console.log(compressStr("aabcccccaaa")); // Output: a2b1c5a3
// console.log(compressStr("abcdefg"));     // Output: abcdefg





// function twoSumPairs(nums, target) {
//   const seen = new Set();
//   const pairs = new Set();

//   for (let num of nums) {
//     let complement = target - num;

//     if (seen.has(complement)) {

//       const pair = [Math.min(num, complement), Math.max(num, complement)];
//       pairs.add(JSON.stringify(pair)); 
//     }
//     seen.add(num);
//   }


//   return Array.from(pairs).map(pair => JSON.parse(pair));
// }


// console.log(twoSumPairs([2, 4, 3, 7, 5, -1], 6));
// // Output: [[2,4],[7,-1]]






function findLongestSubString(str) {
  const charSet = new Set();
  let left = 0;

  let maxLength = 0;

  for (let right = 0; right < str.length; right++) {
    const char = str[right];

    while (charSet.has(char)) {
      charSet.delete(str[left]);
      left++;
    }

    charSet.add(char);

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}



const rotateBruteForce = (nums, k) => {
  const n = nums.length;
 
  k = k % n; 

  for (let i = 0; i < k; i++) {
    const lastElement = nums[n - 1];
    for (let j = n - 1; j > 0; j--) {
      nums[j] = nums[j - 1]; 
    }
    nums[0] = lastElement;
  }
  return nums;
};

const arr1 = [1, 2, 3, 4, 5];
console.log(rotateBruteForce(arr1, 2)); // Output: [4, 5, 1, 2, 3]'''


function productExceptSelf(nums) {
  const n = nums.length;
  const result = new Array(n).fill(1);

  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    result[i] = leftProduct;
    leftProduct *= nums[i];
  }

  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }
  
  return result;
}

const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums)); // Output: [24, 12, 8, 6]





function checkAge(){
  let age = parseInt(prompt("Enter Your Age:"))
  if(age < 18 && age <= 10){
    alert("You are too young to drive") 
    confirm("Do you want to see the prompt again")
  } else if(age < 18 && age > 10){
    alert("You are not allowed to drive, don't worry Comeback in a few years")
     confirm("Do you want to see the prompt again")
  } else if(age >= 18){
  alert("Congratulations You can drive")
     confirm("Do you want to see the prompt again")
  }
}
checkAge()


function secondLargest(arr){
   
    let secondlar = 1;
    const ascending = arr.sort((a, b)=> a - b)
    const n = ascending.length;
    console.log(n)
    console.log(ascending)
   const lastElement = ascending[n - 2]
    console.log(lastElement)
     
}

console.log(secondLargest([1,5,3,2,4,10,48,49]))

