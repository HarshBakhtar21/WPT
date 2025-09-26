export default function Calculator(props){

        let a = parseInt(props.a);
        let b = parseInt(props.b);
        let c = parseInt(props.c);
        function Addition(){
            return(a+b+c);
        }
        return(
            <>
            <p>Calculator</p>
            <h1> Addition is : {Addition()}</h1>
            <h1> Multiplication is : {a * b}</h1>
            <h1> Subtraction is : {b - a}</h1>
            <h1> Division is : {b / a}</h1>
            </>
        )


}