import React, {Component} from 'react';
import Product from '../Product/Product';
import axios from 'axios';

class Dashboard extends Component{
    constructor(){
        super()


    this.delete = this.delete.bind(this)
    }

    delete(id){
        axios.delete(`/api/inventory/${id}`).then(() => {
            this.props.getFn();
        })
    }

    render(){
        var {inventory} = this.props;
        var products = inventory.map((item,i) => {
            return(
                <Product key={i}
                name={item.product_name}
                price={item.price}
                image={item.image_url}
                id={item.id}
                deleteFn={this.delete}
                />
            )
        })
        return(
            <div>
                Dashboard
                {products}
            </div>
        )
    }
}

export default Dashboard;