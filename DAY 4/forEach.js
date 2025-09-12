const number=[9,5,6,4,2,7,3];
let largestNum = number[0];
number.forEach((arr) => {
    if(arr>largestNum){
        largestNum=arr;
    }
});
console.log("largest num is",largestNum)