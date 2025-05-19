import React from "react";

export function SearchResults({ results }) {
  return results.map((game) => (
    <div
      key={game.gameID}
      className="bg-white shadow-md rounded-md p-4 flex flex-col items-center hover:shadow-lg transition duration-200 cursor-pointer"
    >
      <img
        src={game.thumb}
        alt={game.external}
        className="w-32 h-20 object-contain mb-2 rounded"
      />
      <h3 className="text-lg font-semibold text-center font-heading">
        {game.external}
      </h3>
      <p className="text-green-600 font-bold font-body">${game.cheapest}</p>
    </div>
  ));
}
