function display(){
    for(let i = 1; i<= 100; i++){
        if(i % 3 == 0 && i % 5 !=0){ // displays the number divisible by only 3
            console.log(i+"foo\n");
        }else if(i % 5 == 0 && i % 3 != 0){ // displays the number divisible by only 5
            console.log(i+"bar\n");

        }
        else if(i % 5 == 0 && i % 3 == 0){ // displays the number divisible by only 3 and 5 both
            console.log(i+"foobar\n");
        }
        else {
             console.log(i+"harsh\n");
        }
    }
}
display();