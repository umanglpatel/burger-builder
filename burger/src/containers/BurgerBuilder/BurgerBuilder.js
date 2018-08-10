import React, { Component } from 'react';

import HocAux from '../../hoc/HocAux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    // constructor(props){
    //     super(props);
    //     this.state{state here};
    // }

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render() {
        return (
            <HocAux>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Controls</div>
            </HocAux>
        );
    }

}

export default BurgerBuilder;
