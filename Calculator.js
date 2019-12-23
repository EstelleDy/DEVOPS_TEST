import React, {Component} from 'react'
class Calculator extends Component{
    constructor(props){
        super(props);
        this.state ={
            first : 0,
            second : 0,
            result: 0
        }
    }
    handleChange = (e) =>{
        const {name,value} = e.target;
        this.setState({
            [name] : value
        })
    }
   add(first, second){
     return  (parseInt(first)+parseInt(second));
    }
    addition = () =>{
        const{first, second} =this.state;
        this.add(first,second);
        this.setState({
            result : (parseInt(first)+parseInt(second))
        })
    }
   
    render(){
        const {result} = this.state;
        return(
            <div>
                Addition:
                <br/>
                First Number
                <input type = "text" name= "first" onChange={this.handleChange}/>
            <br/>
            Second Number
                <input type = "text" name= "second" onChange={this.handleChange}/>
           
           <br/>
           <button onClick={this.addition}>Addition</button><br/>
           Result: <p>{this.state.result}</p>
            </div>
        )
    }
}export default Calculator;