import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        {/* for boolean active value we can do "active=true" or simply only "active" */}
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;
