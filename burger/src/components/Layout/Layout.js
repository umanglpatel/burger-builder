import React from 'react';

import HocAux from '../../hoc/HocAux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <HocAux>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </HocAux>
);

export default layout;
