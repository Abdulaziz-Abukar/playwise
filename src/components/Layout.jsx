import React from "react";
import { Navbar } from "./Navbar";
import { AppRoutes } from "../routes/AppRoutes";

export function Layout() {
  return (
    <>
      <header className="max-w-full flex justify-between align-middle p-4 bg-gray-950">
        <h1 className="text-2xl lg:text-3xl font-heading font-semibold z-100">
          <span className="text-blue-500">Play</span>
          <span className="text-orange-500">Wise</span>
        </h1>

        <Navbar />
      </header>
      <main>
        <AppRoutes />
      </main>
    </>
  );
}
