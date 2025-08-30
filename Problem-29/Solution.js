// Write a function longestWord that takes a string (a sentence) and returns the longest word in it.
//using functions
// function avgLength(string){
//    const words = string.replace(/[^\w\s]/g, '')
//    const cleanWords = words.split(" ")
//    const lengths = cleanWords.map(word => word.length)
//    const longest = Math.max(...lengths)
//    console.log(cleanWords)
//    const matchingWord = cleanWords.find( cleanWord => cleanWord.length === longest)
//    return matchingWord
// }

// const sentence = "Coding is super fun and challenging!";

// console.log(avgLength(sentence), )



function longestWord(string) {
  const words = string.replace(/[^\w\s]/g, '').split(" ");
  let longest = "";
  
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

const sentence = "Coding is super fun and challenging!";
console.log(longestWord(sentence)); // "challenging"
