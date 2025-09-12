function factorial(n){
    fact = 1;
    for(i = 1; i <= n; i++)
    {
        fact = fact * i;
    }
    return fact  ;
}
    console.log("Factorial of",5,"is: ",factorial(5));

