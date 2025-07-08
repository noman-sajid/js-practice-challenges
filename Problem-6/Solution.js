function filterWordsByLength(words, minLength) {
  const longWords = words.filter(function(word) {
    return word.length >= minLength;
  });
  return longWords;
}

const vocabulary = ["apple", "banana", "cat", "dog", "elephant", "frog"];
const filteredWords = filterWordsByLength(vocabulary, 5);

console.log("Original Vocabulary:", vocabulary);
console.log("Filtered Words (min length 5):", filteredWords);