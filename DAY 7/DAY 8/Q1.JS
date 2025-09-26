
//let arr = [45,34,67,89,9];
//console.log(arr.sort((n1,n2)=>{return (n1 - n2)}));
let arr2 = [{fname:'Hriday',Age:21,marks:78},{fname:'Janvi',Age:23,marks:99},{fname:'Harsh',Age:23,marks:75}]

console.log("before sorting ",arr2)
arr2.sort((s1,s2)=>{
    if(s1.marks > s2.marks) return 1;
    if (s1.marks < s2.marks) return -1;
    else return 0;
})
console.log("After sorting",arr2);