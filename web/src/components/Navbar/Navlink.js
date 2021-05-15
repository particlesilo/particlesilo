import React from "react";
import { styleClass } from "../../utils/style_class";
import { NavLink } from "react-router-dom";

export const Navlink = ({ route, name }) => {
  return (
    <li className={styleClass.navigation.item}>
      <NavLink exact to={route} activeClassName={styleClass.navigation.active} className={styleClass.navigation.link}>
        {name}
      </NavLink>
    </li>
  );
};
