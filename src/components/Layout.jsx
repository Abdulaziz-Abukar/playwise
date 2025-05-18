import React from "react";
import { Navbar } from "./Navbar";
import { AppRoutes } from "../routes/AppRoutes";

export function Layout() {
  return (
    <>
      <header>
        <h1>Placeholder for LOGO</h1>
        <Navbar />
      </header>
      <main>
        <AppRoutes />
      </main>
    </>
  );
}
