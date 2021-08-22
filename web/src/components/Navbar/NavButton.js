import React from "react";
import { styleClass } from "../../utils/style_class";
import { NavLink } from "react-router-dom";

export const NavButton = ({ route, name, fill }) => {
  return (
    <li className={styleClass.navigation.item}>
            <NavLink exact to={route} activeClassName={styleClass.navigation.active} className={styleClass.navigation.link}>
                <button className={fill == "none" ? styleClass.btn.outlineBlue : styleClass.btn.fillBlueGradient}>
                    {name}
                </button>
            </NavLink>
    </li>
  );
};
