import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, //CardDeck, CardColumns,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

class ProductCard extends Component {
    /*constructor(props) {
        super(props);
    }*/

render () {


   return (
        <Card>
            <CardImg width="50%" height="50%" src={this.props.url} alt={this.props.title} />
            <CardBody>
                <h4><CardTitle>{this.props.title}</CardTitle></h4>
                <h5><CardSubtitle>{this.props.currencyFormat}{this.props.price}</CardSubtitle></h5>
                <CardText>{this.props.isFreeShipping}</CardText>
                <Button>Add to Cart</Button>
            </CardBody>
        </Card>
        )
    }
}

export default ProductCard;