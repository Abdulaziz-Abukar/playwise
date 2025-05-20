import React from "react";
import { useNavigate } from "react-router-dom";

export function SearchResults({ results }) {
  const navigate = useNavigate();

  return results.map((game) => (
    <div
      key={game.gameID}
      onClick={() => navigate(`/game/${game.gameID}`)}
      className="cursor-pointer bg-white shadow-md rounded-md p-4 flex flex-col items-center hover:shadow-lg transition duration-200"
    >
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
  ));
}
