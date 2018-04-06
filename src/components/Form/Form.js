import React, {Component} from 'react';

class Form extends Component{
    constructor(){
        super()

        this.state ={
            input1: "",
            input2: "",
            input3: "",
        }
        
    this.cancel = this.cancel.bind(this)
    }
    handleInput1(e){
        this.setState({
            input1: e
        })
    }
    handleInput2(e){
        this.setState({
            input2: e
        })
    }
    handleInput3(e){
        this.setState({
            input3: e
        })
    }
    cancel(){
        this.setState({
            input1: "",
            input2: "",
            input3: "",
        })
    }
    render(){
        return(
            <div>
                <input type="text" value={this.state.input1} onChange={(e) => this.handleInput1(e.target.value)}/>
                <input type="text" value={this.state.input2} onChange={(e) => this.handleInput2(e.target.value)}/>
                <input type="text" value={this.state.input3} onChange={(e) => this.handleInput3(e.target.value)}/>
                <button onClick={this.cancel}>Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
}

export default Form;