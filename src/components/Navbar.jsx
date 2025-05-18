import React from "react";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/search"}>Search</NavLink>
        </li>
        <li>
          <NavLink to={"/wishlist"}>Wishlist</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
      </ul>
    </nav>
  );
}
