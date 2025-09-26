function fetchvalue()
{
    console.log("all arguments are",process.argv);
    let a = process.argv[2];
    for(let i=1; i< 22;i++){
        console.log(i * a);
    }
}
fetchvalue();