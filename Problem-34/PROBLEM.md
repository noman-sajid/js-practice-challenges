Write a function called isEvenOrOdd that takes one number as an argument. The function should return the string "Even" if the number is even and "Odd" if it's odd.


Create a function called findLargestNumber that takes an array of numbers as an argument. The function should find and return the largest number in the array. You should not use any built-in Math functions like Math.max().




Write a function named reverseString that takes a string as an argument and returns the string reversed.



This is a classic coding challenge. Write a function called fizzBuzz that takes one number as an argument. The function should iterate from 1 up to the given number. For each number in the iteration:

If the number is divisible by 3, print "Fizz".

If the number is divisible by 5, print "Buzz".

If the number is divisible by both 3 and 5, print "FizzBuzz".

If it's none of the above, print the number itself.





Write a function named countVowels that takes a string as an argument. The function should return the total count of vowels (a, e, i, o, u) in the string. The function should be case-insensitive.

Example:
countVowels("hello") should return 2

countVowels("JavaScript") should return 3






Write a function called removeDuplicates that takes an array of numbers or strings as an argument. The function should return a new array with all duplicate elements removed. You should not use a built-in Set object.

Example:
removeDuplicates([1, 2, 2, 3, 4, 4, 5]) should return [1, 2, 3, 4, 5]

removeDuplicates(["a", "b", "a", "c", "d", "c"]) should return ["a", "b", "c", "d"]





Problem 4: Find the Smallest Number in an Array
Similar to the "find the largest number" problem, write a function called findSmallestNumber that takes an array of numbers as an argument. The function should find and return the smallest number in the array. You should not use built-in Math functions like Math.min().

Example:
findSmallestNumber([2, 5, 1, 9, 3]) should return 1

findSmallestNumber([100, 50, 25]) should return 25




🔹 Problem 5: Check if a Number is Prime

Write a function that checks if a number is prime.

// Example:
isPrime(7); // true
isPrime(10); // false





Write a function to calculate the factorial of a number using a loop.

// Example:
factorial(5); // 120



You are given an array of numbers from 1 to n, but one number is missing. Find it.

// Example:
findMissing([1, 2, 4, 5]); // 3




🔹 Problem 12: Palindrome Checker

Write a function that checks if a string is the same when reversed.

// Example:
isPalindrome("racecar"); // true
isPalindrome("hello");   // false




🔹 Problem 14: Medium – String Compression

Task:
Implement a function that compresses a string by replacing consecutive repeating characters with the character followed by the count. If the compressed string is not shorter, return the original.

Example:

Input: "aabcccccaaa"
Output: "a2b1c5a3"




🔹 Problem 15: Harder – Two Sum Variant

Task:
You’re given an array of integers and a target sum. Return all unique pairs of numbers that add up to the target.

Example:

Input: [2, 4, 3, 7, 5, -1], target = 6
Output: [[2, 4], [7, -1]]