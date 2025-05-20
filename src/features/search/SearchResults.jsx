import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../wishlist/wishlistSlice";

export function SearchResults({ results }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);

  const handleAddToWishlist = (game, e) => {
    e.stopPropagation(); // Prevent navigation
    const gameToSave = {
      id: game.gameID,
      external: game.external,
      thumb: game.thumb,
      cheapest: game.cheapest,
    };
    dispatch(addToWishlist(gameToSave));
  };

  return results.map((game) => {
    const isInWishlist = wishlist.some((g) => g.id === game.gameID);

    return (
      <div
        key={game.gameID}
        onClick={() => navigate(`/game/${game.gameID}`)}
        className="relative group cursor-pointer bg-white shadow-md rounded-md p-4 flex flex-col items-center hover:shadow-lg transition duration-200 animate-fade-in-up"
      >
        {/* Wishlist Button (Top Right) */}
        {!isInWishlist ? (
          <button
            onClick={(e) => handleAddToWishlist(game, e)}
            className="absolute top-2 right-2 bg-white rounded-full px-3 py-1 text-sm shadow transition-opacity duration-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto hover:bg-red-100"
          >
            ❤️
          </button>
        ) : (
          <div className="absolute top-2 right-2 text-green-600 text-sm font-bold">
            ✅
          </div>
        )}

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
    );
  });
}
