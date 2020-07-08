import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/orders">Orders</NavigationItem>
    {!props.isAuth ? (
      <NavigationItem link="/auth">Sign in</NavigationItem>
    ) : (
      <NavigationItem link="/logout">Log out</NavigationItem>
    )}
  </ul>
);

export default navigationItems;
