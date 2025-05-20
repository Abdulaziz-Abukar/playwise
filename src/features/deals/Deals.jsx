import React from "react";

export function Deals({ results }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {results.map((gameDeal) => (
        <div
          key={gameDeal.gameID}
          className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition duration-200"
        >
          <img
            src={gameDeal.thumb}
            alt={gameDeal.title}
            className="w-32 h-20 object-contain mb-3 rounded"
          />
          <h3 className="text-lg font-semibold mb-1">{gameDeal.title}</h3>
          <p className="text-sm text-gray-500 line-through">
            ${gameDeal.normalPrice}
          </p>
          <p className="text-lg font-bold text-green-600">
            ${gameDeal.salePrice}
          </p>
          <p className="text-sm text-orange-500 mb-2">
            Save {parseFloat(gameDeal.savings).toFixed(0)}%
          </p>
          <a
            href={`https://www.cheapshark.com/redirect?dealID=${gameDeal.dealID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline text-sm font-medium"
          >
            View Deal
          </a>
        </div>
      ))}
    </div>
  );
}
