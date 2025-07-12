function areAllAgesValid(ages, minAge) {
  const allValid = ages.every(function(age) {
    return age >= minAge;
  });
  return allValid;
}

const studentAges = [18, 20, 19, 22, 21];
const mixedAges = [17, 18, 20, 16, 19];
const emptyAges = [];

console.log("Student Ages:", studentAges);
console.log("Are all student ages >= 18?", areAllAgesValid(studentAges, 18));

console.log("\nMixed Ages:", mixedAges);
console.log("Are all mixed ages >= 18?", areAllAgesValid(mixedAges, 18));

console.log("\nEmpty Ages:", emptyAges);
console.log("Are all empty ages >= 18?", areAllAgesValid(emptyAges, 18));
