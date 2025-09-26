import { render } from "@testing-library/react";
import  { Component } from "react";
export default class Factorial extends Component{
    constructor(props){
        super(props);
        this.a = props.num1
        this.eventHandler = this.myeventHandler.bind(this);
    }
        doOperation(){
            
            return
            <>
            <h1>from doOperation</h1>
            </>
        }
        myeventHandler(e){
            console.log(e.target);
            console.log(e.target.value);
            console.log("in event handler");
            if(e.target.value == 'Factorial'){
                //
            }
            if(e.target.value == 'Call1'){
                //
            }
            if(e.target.value == 'Call2'){
                //
            }
            
        }
        
    
    render()
    {
        return(
            <>
            <h1>from class component</h1>
            Enter a number <input type="text" id="t1" 
            onBlur={(e) => console.log(e.target.value)}
            ></input>
            <button value='Factorial' onClick={this.myeventHandler}></button>
                Call Factorial
            <button value='Call1' onClick={this.myeventHandler}>
                Call1
            </button>
            <button value='Call2' onClick={this.myeventHandler}>
                Call2
            </button>
            {this.doOperation()}
            </>

        )

    }
  


}
