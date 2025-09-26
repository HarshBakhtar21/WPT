function calculate(...a){
  let s=0;
  
  for (let i=0;i<a.length;i++){
        s+=a[i];
        if(a[i]%2==1){
            console.log(a[i]);
        }
  } 
  return s;
}

let a = calculate(1,2,4,6,8,10);
console.log(a)
