import React from 'react';
import HocAux from '../../hoc/HocAux';
import classes from './Layout.css';

const layout = (props) => (
    <HocAux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </HocAux>
);

export default layout;
