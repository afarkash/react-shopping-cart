import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, //CardDeck, CardColumns,
    CardTitle, CardSubtitle, 
    ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class ProductCard extends Component {
    constructor(props) {
        super(props);
    
    this.toggle = this.toggle.bind(this);
    this.state= {dropdownOpen: false};

    this.handleClick = this.handleClick.bind(this);
}

toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  handleClick(){
    
  }


render () {


   return (
        <Card>
            <CardImg width="50%" height="50%" src={this.props.url} alt={this.props.title} />
            <CardBody>
                <h4><CardTitle>{this.props.title}</CardTitle></h4>
                <h5><CardSubtitle>{this.props.currencyFormat}{this.props.price}</CardSubtitle></h5>
                <CardText>{this.props.isFreeShipping}</CardText>
                
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>Add to Cart</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Size</DropdownItem>
                        <DropdownItem onClick={this.handleClick}>S</DropdownItem>
                        <DropdownItem>M</DropdownItem>
                        <DropdownItem>L</DropdownItem>
                        <DropdownItem>XL</DropdownItem>
                    </DropdownMenu>
            </ButtonDropdown>
            
            </CardBody>
        </Card>
        )
    }
}

export default ProductCard;