import React,{Component} from "react";
class Message extends Component{
    constructor(){
        super()
        this.state = {
            message:'welcome everyone'
        }
    }
    changeMessage(){
        this.setState({
            message:'Thanks for clcking'
        })
    }
    render()
    {
        return(
            <div>
                <h1>{this.state.message} </h1>
                <button onClick={()=> this.changeMessage()}>clickme</button>
            </div>
        )
    }
}
export default Message