import React, { Component } from 'react';

import HocAux from '../../hoc/HocAux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    render() {
        return (
            <HocAux>
                <Burger />
                <div>Build Controls</div>
            </HocAux>
        );
    }

}

export default BurgerBuilder;
