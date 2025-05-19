import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Hamburger } from "./Hamburger";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="lg:w-lg md:w-md relative">
      {/* Hamburger icon - stays visible at top right */}
      <div className="fixed top-4 right-4 z-[999] max-[768px]:block hidden">
        <Hamburger isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
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

      {/* Mobile Slide-in Menu (≤768px) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen bg-gray-950 text-white flex flex-col items-center justify-center gap-8 z-50 max-[768px]:flex lg:hidden"
          >
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
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
