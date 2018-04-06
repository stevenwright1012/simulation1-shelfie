import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';


class App extends Component {
  constructor(){
    super()

    this.state={
      inventory:[
        {
          name: 'Puppy',
          price: 800,
          image: 'http://www.pravsworld.com/wp-content/uploads/2016/11/Puppy-Size-Love.jpg'
        },
        {
          name: 'Hat',
          price: 20,
          image: 'https://goorin-goorinbrosinc.netdna-ssl.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/imports/products/100-3333-BLK-F01.png'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
          <Header />
          <Dashboard inventory={this.state.inventory}/>
          <Form />
      </div>
    );
  }
}

export default App;
