function createSentence(wordsArray) {
  const sentence = wordsArray.join(" ");
  return sentence;
}

const words = ["Hello", "world", "this", "is", "JavaScript"];
const fullSentence = createSentence(words);

console.log("Original Words Array:", words);
console.log("Full Sentence (space-separated):", fullSentence);

const hyphenatedWords = ["data", "science", "machine", "learning"];
const joinedWithHyphen = hyphenatedWords.join("-");
console.log("Joined with hyphen:", joinedWithHyphen);

const noSeparatorWords = ["abc", "def", "ghi"];
const joinedWithoutSeparator = noSeparatorWords.join("");
console.log("Joined without separator:", joinedWithoutSeparator);