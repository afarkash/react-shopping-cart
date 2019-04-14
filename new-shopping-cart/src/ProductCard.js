import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardDeck, CardColumns,
    CardTitle, CardSubtitle, Button } from 'reactstrap';


class ProductCard extends Component {
    constructor(props) {
        super(props);
    }

render () {
    //console.log("properties:" + toString(this.props))
    var imgURL = "https://github.com/jeffersonRibeiro/react-shopping-cart/blob/master/src/static/products/" + toString(this.props.sku) + "_1.jpg";
    return (
        <Card>
            <CardImg top width="100%" src={this.props.sku} alt="image" />
            <CardBody>
                <CardTitle>{this.props.title}</CardTitle>
                <CardSubtitle>{this.props.currencyFormat}{this.props.price}</CardSubtitle>
                <CardText>{this.props.isFreeShipping}</CardText>
                <Button>Add to Cart</Button>
            </CardBody>
        </Card>
        )
    }
}

export default ProductCard;