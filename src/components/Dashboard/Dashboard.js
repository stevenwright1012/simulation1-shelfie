import React, {Component} from 'react';
import Product from '../Product/Product'

class Dashboard extends Component{

    render(){
        var {inventory} = this.props;
        var products = inventory.map((item,i) => {
            return(
                <Product key={i}
                name={item.product_name}
                price={item.price}
                image={item.image_url}/>
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