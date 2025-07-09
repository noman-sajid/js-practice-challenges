const words = ['cat', 'hippopotamus', 'dog', 'elephant'];

const longest = words.reduce((acc, word) => {
  return word.length > acc.length ? word : acc;
}, '');

console.log(longest); 