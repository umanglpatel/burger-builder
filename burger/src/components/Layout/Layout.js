import React from 'react';
import HocAux from '../../hoc/HocAux';

const layout = (props) => (
    <HocAux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </HocAux>
);

export default layout;
