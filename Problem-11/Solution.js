function getWordsFromString(sentence) {
  const wordsArray = sentence.split(" ");
  return wordsArray;
}

const mySentence = "JavaScript is a versatile programming language";
const words = getWordsFromString(mySentence);

console.log("Original Sentence:", mySentence);
console.log("Words Array:", words);

const commaSeparated = "apple,banana,cherry";
const fruits = getWordsFromString(commaSeparated);
console.log("Comma Separated (incorrectly parsed):", fruits);


