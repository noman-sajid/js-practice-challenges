function calculateSum(numbers) {

  let total = 0;

  for (let i = 0; i < numbers.length; i++) {

    total += numbers[i];

  }

  return total;

}



const myNumbers = [10, 20, 30, 40];

const sum = calculateSum(myNumbers);

console.log("The sum is:", sum); 