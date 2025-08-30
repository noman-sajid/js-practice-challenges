//using Loops

// function topThree(string) {
//   const words = string.replace(/[^\w\s]/g, '').split(" ");

//   let longestThree = [];
//   let lengths = []
//   let first = 0;
//   let second = 0;
//   let third = 0;
// for(let word of words){
//   lengths.push(word.length)
//   console.log(lengths)
  
// }

//  for (let i = 0; i < lengths.length; i++) {
//   const currentLength = lengths[i];

//   if (currentLength > first) {
//     // Current number is the new first
//     third = second;
//     second = first;
//     first = currentLength;
//   } else if (currentLength > second) {
//     // Current number is the new second
//     third = second;
//     second = currentLength;
//   } else if (currentLength > third) {
//     // Current number is the new third
//     third = currentLength;
//   }
// }


// // Loop to find all words with the 'first' length
// for (let i = 0; i < words.length; i++) {
//   if (words[i].length === first) {
//     longestThree.push(words[i]);
//   }
// }

// // Loop to find all words with the 'second' length
// for (let i = 0; i < words.length; i++) {
//   if (words[i].length === second) {
//     longestThree.push(words[i]);
//   }
// }

// // Loop to find all words with the 'third' length
// for (let i = 0; i < words.length; i++) {
//   if (words[i].length === third) {
//     longestThree.push(words[i]);
//   }
// }

 
// return longestThree
  
// }

// const sentence = "Coding is super fun and challenging!";
// console.log(topThree(sentence)); // "challenging"



//Imprved version using loops and array methods 
function topThree(string) {
  const words = string.replace(/[^\w\s]/g, '').split(" ");

  let longestThree = [];
  let lengths = []
  let first = 0;
  let second = 0;
  let third = 0;
for(let word of words){
  lengths.push(word.length)
  console.log(lengths)
  
}

 for (let i = 0; i < lengths.length; i++) {
  const currentLength = lengths[i];

  if (currentLength > first) {
    // Current number is the new first
    third = second;
    second = first;
    first = currentLength;
  } else if (currentLength > second) {
    // Current number is the new second
    third = second;
    second = currentLength;
  } else if (currentLength > third) {
    // Current number is the new third
    third = currentLength;
  }
}


// Loop to find all words with the 'first' length
for (let i = 0; i < words.length; i++) {
  if (words[i].length === first) {
    longestThree.push(words[i]);
  }
}

// Loop to find all words with the 'second' length
for (let i = 0; i < words.length; i++) {
  if (words[i].length === second) {
    longestThree.push(words[i]);
  }
}

// Loop to find all words with the 'third' length
for (let i = 0; i < words.length; i++) {
  if (words[i].length === third) {
    longestThree.push(words[i]);
  }
}

 
return longestThree
  
}

const sentence = "Coding is super fun and challenging!";
console.log(topThree(sentence)); // "challenging"
