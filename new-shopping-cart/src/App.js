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
import { Card, CardImg, CardText, CardBody, CardDeck, CardColumns,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import ProductCard from './ProductCard'
  //<li>{products[sku].title}</li>);

const App = ({products}) => {
  const skus = Object.keys(products);
  //console.log(skus);
  const items = skus.map(sku => {
    console.log(sku.toString());
    var imgU = "https://github.com/jeffersonRibeiro/react-shopping-cart/blob/master/src/static/products/" + sku.toString() + "_1.jpg";
    if(products[sku].isFreeShipping == true){
      return (<ProductCard
        sku = {imgU}
        title = {products[sku].title}
        currencyFormat = {products[sku].currencyFormat}
        price = {products[sku].price}
        isFreeShipping = "Free Shipping Available"/>)
      }
      else{
        return (<ProductCard 
          title = {products[sku].title}
          currencyFormat = {products[sku].currencyFormat}
          price = {products[sku].price} />)
        }
  })
  

  return (
    <CardColumns>
      {items}
    </CardColumns>
  )
  /*return(
  <CardColumns>
  <Card>
    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
    <CardBody>
      <CardTitle>Card title</CardTitle>
      <CardSubtitle>Card subtitle</CardSubtitle>
      <CardText>{items}</CardText>
      <Button>Button</Button>
    </CardBody>
  </Card>
  <Card>
    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
    <CardBody>
      <CardTitle>Card title</CardTitle>
      <CardSubtitle>Card subtitle</CardSubtitle>
      <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
      <Button>Button</Button>
    </CardBody>
  </Card>
  <Card>
    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
    <CardBody>
      <CardTitle>Card title</CardTitle>
      <CardSubtitle>Card subtitle</CardSubtitle>
      <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
      <Button>Button</Button>
    </CardBody>
  </Card>
</CardColumns>
);*/
};
  
  
  //return (<div><ul>{items}</ul><Button color="danger">Purchase</Button></div>);
//};

export default App;
