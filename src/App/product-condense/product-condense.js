import React, {Component} from 'react';
import './product-condense.css';


class ProductCondense extends Component{
    render() {
        return(
            <li className="list-group-item">
                <a className="btn btn-outline-danger">{this.props.product.title} | ${this.props.product.price}</a>
                
            </li>
        );
    }   
}

export default ProductCondense;