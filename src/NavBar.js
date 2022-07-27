import React from "react";
import { NavLink } from "react-router-dom";

function NavyBar() {
  const mystyle = {
    padding: "10px",
    fontFamily: "Arial",
    fontsize: "10px",
    fontweight: "bold",
  };
  return (
    <div>
      <NavLink to="/" style={mystyle}>
        Home
      </NavLink>
      <NavLink to="/events" style={mystyle}>
        Events
      </NavLink>
    </div>
  );
}

export default NavyBar;
