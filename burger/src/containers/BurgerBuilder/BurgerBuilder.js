import React, { Component } from 'react';
import HocAux from '../../hoc/HocAux';

class BurgerBuilder extends Component {

    render() {
        return (
            <HocAux>
                <div>Burger</div>
                <div>Build Controls</div>
            </HocAux>
        );
    }

}

export default BurgerBuilder;
