import React, { Component } from 'react';

import HocAux from '../../../hoc/HocAux';
import Button from '../../UI/Button/Button';

class OrderSumamry extends Component {

    // This could be a functional component, doesn't have to be a class
    componentWillUpdate() {
        console.log('[OrderSumamry] WillUpdate');
    }

    render() {

        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span> : {this.props.ingredients[igKey]}
                    </li>);
            });

        return (
            <HocAux>
                <h3>Your Order</h3>
                <p>A delidious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </HocAux>
        );
    }
}

export default OrderSumamry;
