import React from "react";
import { WishlistList } from "../features/wishlist/WishlistList";

export function Wishlist() {
  return (
    <section className="pt-6">
      <h2 className="text-3xl font-bold text-blue-600 text-center mb-6 font-heading">
        Your Wishlist
      </h2>

      <WishlistList />
    </section>
  );
}
