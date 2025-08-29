// Write a function longestWord that takes a string (a sentence) and returns the longest word in it.
//using functions
function avgLength(string){
   const words = string.replace(/[^\w\s]/g, '')
   const cleanWords = words.split(" ")
   const lengths = cleanWords.map(word => word.length)
   const longest = Math.max(...lengths)
   console.log(cleanWords)
   const matchingWord = cleanWords.find( cleanWord => cleanWord.length === longest)
   return matchingWord
}

const sentence = "Coding is super fun and challenging!";

console.log(avgLength(sentence), )


