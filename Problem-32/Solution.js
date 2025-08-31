//Using loops
function firstUniqueChar(str) {
  const cleanStr = str.toLowerCase().replace(/[^\w]/g, "");
  const freq = {};

  for (const char of cleanStr) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (const char of cleanStr) {
    if (freq[char] === 1) return char;
  }

  return null;
}
