function factorial(){
    let fact = 1;
    let n = 5;
    while(n >= 1){
        fact = fact * n;
        n--;
    }
    console.log(fact);

}
factorial();
