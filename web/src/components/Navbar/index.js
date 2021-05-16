import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navlink } from "./Navlink";

export default function Navbar({ children }){
  return (
    <Router>
      <div>
        <div className="grid min-w-full place-items-end">
          <ul className="flex p-8">
            <Navlink route="/" name="Home" />
            <Navlink route="/about" name="About" />
            <Navlink route="/upload" name="Upload" />
            <Navlink route="/login" name="Login" />
          </ul>
        </div>
        <div className="min-w-full mx-auto">{children}</div>
      </div>
    </Router>
  );
};
