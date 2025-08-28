 //count characters and return an object

 //Using loop
// function countChars(str){
//    const charFreq = {}

//    for(char of str){
//     if(charFreq[char]){
//       charFreq[char]++;
//     } else{
//       charFreq[char] = 1;
//     }
  
//    }
//     return charFreq;
// }


// const sentance = "someone tell this guy"
// const result = countChars(sentance);
// console.log(result);



//Using reduce method


 
function countChars(str){
   return str.split('').reduce((charFreq, char) => {
      charFreq[char] = (charFreq[char] || 0) + 1;
      return charFreq;
   }, {})
}

const sentence = "someone tell this guy";
const result = countChars(sentence);
console.log(result);