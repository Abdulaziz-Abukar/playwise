import React from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { Search } from "../pages/Search";
import { Wishlist } from "../pages/Wishlist";
import { Error } from "../pages/Error";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="search" element={<Search />} />
      <Route path="wishlist" element={<Wishlist />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
