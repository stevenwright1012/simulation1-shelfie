import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component{
    constructor(){
        super()

        this.state ={
            input1: "",
            input2: "",
            input3: "",
        }

    this.cancel = this.cancel.bind(this);
    this.post = this.post.bind(this);
    this.handleInput1 = this.handleInput1.bind(this);
    this.handleInput2 = this.handleInput2.bind(this);
    this.handleInput3 = this.handleInput3.bind(this);
    
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
    post(){
        axios.post('/api/inventory', {name: this.state.input1,
                                      price: this.state.input2,
                                      image: this.state.input3}).then(() =>{
                                        this.props.getFn()
                                        this.cancel()
                                     })
    }
    render(){
        return(
            <div>
                <input type="text" value={this.state.input1} onChange={(e) => this.handleInput1(e.target.value)}/>
                <input type="text" value={this.state.input2} onChange={(e) => this.handleInput2(e.target.value)}/>
                <input type="text" value={this.state.input3} onChange={(e) => this.handleInput3(e.target.value)}/>
                <button onClick={this.cancel}>Cancel</button>
                <button onClick={this.post}>Add to Inventory</button>
            </div>
        )
    }
}

export default Form;