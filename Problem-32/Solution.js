//Using loops
// function firstUniqueChar(str) {
//   const cleanStr = str.toLowerCase().replace(/[^\w]/g, "");
//   const freq = {};

//   for (const char of cleanStr) {
//     freq[char] = (freq[char] || 0) + 1;
//   }

//   for (const char of cleanStr) {
//     if (freq[char] === 1) return char;
//   }

//   return null;
// }


// firstUniqueChar("swiss")       // "w"
// firstUniqueChar("aabb")        // null
// firstUniqueChar("Hello World") // "h"


//using functions and methods

function firstUniqueChar(str) {
  const cleanStr = str.toLowerCase().replace(/[^\w]/g, "");
  const chars = [...cleanStr];
  const freq = chars.reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
  const uniqueChar = chars.find(char => freq[char] === 1);      
  return uniqueChar || null;
}