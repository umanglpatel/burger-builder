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
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
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
