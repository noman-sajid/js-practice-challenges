// Calculate the sum of numbers from 1 to 10

// let sum = 0;
// for(let i = 1; i <= 10; i++){
  
//   sum += i
      
// }
// console.log(sum)


// Calculate 10! 


let factorial = 1;

for(let i = 1; i <= 10; i++){

    factorial *= i
    
}
console.log(factorial)



//Calculate the sum of odd numbers greater than 10 and less or equal than 30



// let sum = 0;
// for(let i = 11; i <= 30; i += 2){
//    sum += i;
// }

// console.log(sum)



//Create a function that receives an 
// array of numbers and returns an 
// array containing only the positive 
// numbers.
//  Requirement: Use a “for” loop

let givenArray =  [1, 3, -9, 15, -90];

let sum = 0;
function filtNeg(arr){
    let positiveArr = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
          positiveArr.push(arr[i])
        }
    }
    return positiveArr;
}

console.log(filtNeg(givenArray))

