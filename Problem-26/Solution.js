 //count characters and return an object
function countChars(str){
   const charFreq = {}

   for(char of str){
    if(charFreq[char]){
      charFreq[char]++;
    } else{
      charFreq[char] = 1;
    }
  
   }
    return charFreq;
}


const sentance = "someone tell this guy"
const result = countChars(sentance);
console.log(result);