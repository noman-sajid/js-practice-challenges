//Using frequency counter pattern --Loops
function areAnagrams(str1, str2) {
  let cleanStr1 = str1.toLowerCase().replace(/[^\w]/g, "").split("");
  let cleanStr2 = str2.toLowerCase().replace(/[^\w]/g, "").split("");

  const freq1 = {};
  const freq2 = {};

  for (let char of cleanStr1) {
    freq1[char] = (freq1[char] || 0) + 1;
  }

  for (let char of cleanStr2) {
    freq2[char] = (freq2[char] || 0) + 1;
  }

  if (Object.keys(freq1).length !== Object.keys(freq2).length) {
    return false;
  }

  for (let char in freq1) {
    if (freq1[char] !== freq2[char]) {
      return false;
    }
  }

  return true;
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("rail safety", "fairy tales")); // true
console.log(areAnagrams("hello", "world")); // false
