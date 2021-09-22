import React from 'react';
import './checkout.css';
import ReactCurrencyFormatter from "react-currency-formatter";
import {Link} from "react-router-dom";


class Checkout extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        const totalPrice = this.props.shoppingCart.reduce((sum, cartItem) =>
            sum + (cartItem.amount * +cartItem.product.price), 0);

        const shoppingCartTableRowsHTML = this.props.shoppingCart.length ? this.props.shoppingCart.map((cartItem, index) => {
                const product = cartItem.product;
                const cartAmount = cartItem.amount;
                return (
                    <tr key={product.id}>
                        <th scope="row">{index + 1}</th>
                        <td className="checkout-image"><img src={product.img} className="img-thumbnail"/></td>
                        <td>{product.name}</td>
                        <td><ReactCurrencyFormatter quantity={product.price}/></td>
                        <td>{cartAmount}</td>
                        <td><ReactCurrencyFormatter quantity={product.price * cartAmount}/></td>
                        <td>
                            <button className="btn btn-danger"
                                    onClick={() => this.props.handleRemoveFromCart(product)}>
                                <i className="fa fa-remove"/>
                            </button>
                        </td>
                    </tr>
                )
            })
            : (
                <tr>
                    <td colSpan="7" className="text-center">
                        There are no items in your cart. You can find the products&nbsp;
                        <Link className="text-info" to="/products">here</Link>
                    </td>
                </tr>
            );

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <table className="table table-striped table-light mt-4">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Subtotal</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {shoppingCartTableRowsHTML}
                            </tbody>
                        </table>
                        <div className="text-right">
                            <h4 className="text-monospace">
                                Total Price: <ReactCurrencyFormatter quantity={totalPrice}/>
                            </h4>
                            <div>
                                <button className="btn btn-warning"
                                        disabled={!this.props.shoppingCart.length}
                                        onClick={() => this.props.handleResetCart()}>
                                    <i className="fa fa-remove"/> Reset Cart
                                </button>
                                
                            </div>

                            <div>
                            <button type="button" class="btn btn-outline-primary">Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Checkout;
