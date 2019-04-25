import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card, Table } from 'reactstrap';

class Cart extends Component {
    constructor(props) {
        super(props);
    
    this.toggle = this.toggle.bind(this);
    this.state= {dropdownOpen: false};
}

toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

render() {
    return (
        <div>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Cart</Button>
        <Collapse isOpen={this.state.collapse}>

        <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Size</th>
            <th>Price</th>
            <th>Remove</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td><Button>X</Button></td>

          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td><Button>X</Button></td>

          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td><Button>X</Button></td>

          </tr>
          
        </tbody>
      </Table>
        <Button>Checkout</Button>
        </Collapse>
        </div>
    );
    }
}
    

export default Cart;