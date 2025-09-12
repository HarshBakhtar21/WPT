function calculate(...a){
let s = 0;
let max = Math.max(...a)

    for(let i=0; i<a.length; i++){
        s=s+a[i];
        if(a[i]%2==1){
        console.log("Odd number is :", a[i])
        }
    }
  console.log("Maximum number is : ", max)
 
    return s;
}
let p = calculate(1,6,8,80,8);
console.log("Sum of array is : " , p);