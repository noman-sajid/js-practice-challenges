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



function findLargestNumber(numbers){
    let largest = numbers[0];
    for(let i = 1; i < numbers.length; i++){
        if(numbers[i] > largest){
            largest = numbers[i];
        }
    }
}