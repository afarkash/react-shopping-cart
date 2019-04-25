/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;*/

import React from 'react';
import { 
//  Card, CardImg, CardText, CardBody, CardDeck, 
  CardColumns
  //CardTitle, CardSubtitle, Button 
} from 'reactstrap';
import ProductCard from './ProductCard'
import Cart from './Cart'

const App = ({products}) => {
  const skus = Object.keys(products);
  const items = skus.map(sku => {

    if(products[sku].isFreeShipping === true){
      return (<ProductCard
        key =  {sku.toString()}
        url = {"./data/products/" + sku.toString() + "_1.jpg"}
        title = {products[sku].title}
        currencyFormat = {products[sku].currencyFormat}
        price = {products[sku].price}
        isFreeShipping = "Free Shipping Available"/>)
      }
      else{
        return (<ProductCard
          key =  {sku.toString()}
          url = {"./data/products/" + sku.toString() + "_1.jpg"}
          title = {products[sku].title}
          currencyFormat = {products[sku].currencyFormat}
          price = {products[sku].price} />)
        }
  })

  return (
    <div>
      <Cart />
      <CardColumns>
        {items}
      </CardColumns>
    </div>
  )
};

export default App;
