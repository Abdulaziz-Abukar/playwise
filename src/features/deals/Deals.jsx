import React from "react";
import { useSelector } from "react-redux";

export function Deals({ results }) {
  const storeMap = useSelector((state) => state.stores.storeMap);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {results.map((gameDeal) => {
        const store = storeMap[gameDeal.storeID];

        return (
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

            {store && (
              <div className="flex items-center gap-2 mt-2">
                <img
                  src={`https://www.cheapshark.com${store.images.logo}`}
                  alt={store.storeName}
                  className="w-6 h-6"
                />
                <span className="text-sm text-gray-600">{store.storeName}</span>
              </div>
            )}

            <a
              href={`https://www.cheapshark.com/redirect?dealID=${gameDeal.dealID}`}
              className="text-blue-600 hover:text-blue-800 underline text-sm font-medium mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Deal
            </a>
          </div>
        );
      })}
    </div>
  );
}
