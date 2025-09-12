let arr=[1,9,2,8]
function display_array(){
    console.log("Array : ",arr)

}
function array_lib_funct(choice){
    switch(choice){
        case 1:{
            arr.push(50);
            console.log(arr)
            break;}
        case 2:
            let popped = arr.pop()
            console.log("popped value is",popped);
            break;
    }


}
array_lib_funct(10,1)
console.log(arr);
array_lib_funct(1)