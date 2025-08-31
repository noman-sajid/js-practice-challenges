//Using loops
// function firstUniqueWord(str){
// const cleanStr = str.toLowerCase().replace(/[^\w\s]/g, "");
// const arr = cleanStr.split(" ");
// const freq = {}
// console.log(arr)
//     for(word of arr){
//         freq[word] = (freq[word] || 0) + 1;
//     }
//    console.log(word)

//    for(word of arr){
//        if(freq[word] === 1){
//            return word
//        }
//    }
//     return null;
    
// }

// firstUniqueWord("This is a test. This test is simple.") // "a"
// firstUniqueWord("Hello hello world!")                  // "world"
// firstUniqueWord("Repeat repeat repeat")                // null


//using functions and methods

function firstUniqueWord(str){
    const cleanStr = str.toLowerCase().replace(/[^\w\s]/g, "");
    const arr = cleanStr.split(" ");
    const freq = arr.reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});
    const uniqueWord = arr.find(word => freq[word] === 1);
    return uniqueWord || null;
} 

firstUniqueWord("This is a test. This test is simple.") // "a"
firstUniqueWord("Hello hello world!")                  // "world"
firstUniqueWord("Repeat repeat repeat")                // null