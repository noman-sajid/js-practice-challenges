//using methods
// function avgLength(string){
//     const elements = string.split(" ");
//     let lengths = elements.map(word => word.length).reduce((acc , crrVal)=> acc + crrVal);
//   const totalAvg = lengths/elements.length
// return totalAvg

// }

// const sentance = "Hello, world!";
// const avg = avgLength(sentance);
// console.log("Average Length:", avg);


//Using a Loop

function avgLength(string){
    const elements = string.split(" ");
    let totalLength = 0;
    
    for(element of elements){
      const lengths = element.length;
      totalLength = totalLength + lengths
      
    }
    const totalAvg = totalLength / elements.length;
    return totalAvg
}

const sentance = "Hello, world!";

const avg = avgLength(sentance);
console.log("Average Length:", avg); 