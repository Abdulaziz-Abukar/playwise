import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Hamburger } from "./Hamburger"; // path may vary

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="lg:w-lg md:w-md relative">
      {/* Hamburger icon visible at ≤600px */}
      <div className="max-[768px]:block hidden">
        <Hamburger onClick={() => setMenuOpen(!menuOpen)} />
      </div>

      {/* Desktop Nav Links */}
      <ul className="max-[768px]:hidden flex justify-around items-center font-body text-white text-xl max-[1024px]:text-lg lg:mt-[6px] max-[1023px]:mt-[3px]">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold underline transition-colors duration-300"
                : "text-white hover:text-orange-400 transition-colors duration-300"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold underline transition-colors duration-300"
                : "text-white hover:text-orange-400 transition-colors duration-300"
            }
          >
            Search
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold underline transition-colors duration-300"
                : "text-white hover:text-orange-400 transition-colors duration-300"
            }
          >
            Wishlist
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold underline transition-colors duration-300"
                : "text-white hover:text-orange-400 transition-colors duration-300"
            }
          >
            About
          </NavLink>
        </li>
      </ul>

      {/* Mobile Menu (only shows at ≤600px when open) */}
      {menuOpen && (
        <ul className="absolute top-12 right-2 w-[250px] bg-black text-white flex flex-col items-center gap-4 py-6 z-50 max-[768px]:flex lg:hidden rounded-md shadow-lg">
          <li>
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-semibold underline transition-colors duration-300"
                  : "text-white hover:text-orange-400 transition-colors duration-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-semibold underline transition-colors duration-300"
                  : "text-white hover:text-orange-400 transition-colors duration-300"
              }
            >
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/wishlist"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-semibold underline transition-colors duration-300"
                  : "text-white hover:text-orange-400 transition-colors duration-300"
              }
            >
              Wishlist
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-semibold underline transition-colors duration-300"
                  : "text-white hover:text-orange-400 transition-colors duration-300"
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}
