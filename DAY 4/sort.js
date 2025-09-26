function largestnum(arr)
{
    arr.sort((a,b)=>a-b);
    return arr[arr.length-1];
}
let arr=[4,6,9,5,7];
console.log("largest number is",largestnum(arr));