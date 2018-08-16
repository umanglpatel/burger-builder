import React from 'react';

import HocAux from '../../../hoc/HocAux';

const orderSumamry = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span> : {props.ingredients[igKey]}
                </li>);
        });
    return (
        <HocAux>
            <h3>Your Order</h3>
            <p>A delidious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <button>CANCEL</button>
            <button>CONTINUE</button>
        </HocAux>
    );
};

export default orderSumamry;
