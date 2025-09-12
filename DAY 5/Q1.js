function calculate(...a){
    let s=0 ;
    for(let i=0 ; i < a.length; i++)
        {s+=a[i];
        if(a[i]%2==1){
            console.log(a[i])
        }
        }
    return s;

};
let q = calculate(1,2,3,4,5,6,7);
console.log("Sum is",q);