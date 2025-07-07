function filterEvenNumbers(numbersArray) {
  const evenNumbers = [];
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] % 2 === 0) {
      evenNumbers.push(numbersArray[i]);
    }
  }
  return evenNumbers;
}

const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filtered = filterEvenNumbers(allNumbers);
console.log("Even numbers:", filtered);
