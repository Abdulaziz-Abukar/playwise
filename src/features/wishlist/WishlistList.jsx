import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "./wishlistSlice";
import { useNavigate } from "react-router-dom";

export function WishlistList() {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (wishlist.length === 0) {
    return (
      <p className="text-center text-gray-400 text-lg mt-10 animate-fade-in-up">
        🫥 Your wishlist is empty. Go add some games!
      </p>
    );
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 animate-fade-in-up">
      {wishlist.map((game) => (
        <div
          key={game.id}
          onClick={() => navigate(`/game/${game.id}`)}
          className="relative bg-white shadow-md rounded-md p-4 flex flex-col items-center hover:shadow-lg transition duration-200 cursor-pointer"
        >
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevents triggering navigate
              dispatch(removeFromWishlist(game.id));
            }}
            className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-xl hover:cursor-pointer"
          >
            ❌
          </button>

          <img
            src={game.thumb}
            alt={game.external}
            className="w-32 h-20 object-contain mb-2 rounded"
          />
          <h3 className="text-lg font-semibold text-center truncate w-full">
            {game.external}
          </h3>
          <p className="text-green-600 font-bold text-sm mt-1">
            Lowest Price: ${game.cheapest}
          </p>
          <p className="text-gray-500 text-xs mt-1 text-center">
            Click for details
          </p>
        </div>
      ))}
    </div>
  );
}
