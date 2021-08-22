import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { NavButton } from "./NavButton";
import { Navlink } from "./Navlink";

export default function Navbar({ children }){
  return (
    <Router>
      <div>
        <div className="grid min-w-full place-items-end">
          <ul className="flex p-8 items-cenetr">
            <Navlink route="/" name="Home" />
            <Navlink route="/about" name="About" />
            <Navlink route="/dashboard" name="Dashboard" />
            <NavButton route="/login" name="Login" fill="none"/>
            <NavButton route="/signup" name="Sign Up" fill="solid"/>
          </ul>
        </div>
        <div className="min-w-full mx-auto">{children}</div>
      </div>
    </Router>
  );
};
