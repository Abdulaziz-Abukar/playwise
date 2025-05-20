import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import { AppRoutes } from "../routes/AppRoutes";
import { useDispatch } from "react-redux";
import { fetchStores } from "../features/stores/storeSlice";
import { Footer } from "./Footer";

export function Layout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStores());
  }, [dispatch]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <header className="max-w-full flex justify-between items-center p-4 bg-gray-950">
        <h1 className="text-2xl lg:text-3xl font-heading font-semibold z-100">
          <span className="text-blue-500">Play</span>
          <span className="text-orange-500">Wise</span>
        </h1>

        <Navbar />
      </header>

      <main className="flex-grow">
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
}
