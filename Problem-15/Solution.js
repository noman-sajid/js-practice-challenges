function countCharacterFrequencies(text) {
  const frequencies = {}; // Initialize an empty object to store counts

  // Convert the string to lowercase to treat 'A' and 'a' as the same character
  const lowercasedText = text.toLowerCase();

  // Iterate over each character in the string
  for (let i = 0; i < lowercasedText.length; i++) {
    const char = lowercasedText[i];

    if (frequencies[char]) {
      // If the character is already a key in the object, increment its count
      frequencies[char]++;
    } else {
      // If the character is not yet a key, add it with a count of 1
      frequencies[char] = 1;
    }
  }

  return frequencies;
}

const sentence = "Hello World";
const charCounts = countCharacterFrequencies(sentence);
console.log("Character Frequencies for 'Hello World':", charCounts);

const anotherSentence = "Programming is fun";
const anotherCounts = countCharacterFrequencies(anotherSentence);
console.log("Character Frequencies for 'Programming is fun':", anotherCounts);
