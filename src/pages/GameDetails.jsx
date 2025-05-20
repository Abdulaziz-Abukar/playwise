import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGameById, clearGame } from "../features/games/gameSlice";

export function GameDetails() {
  const { gameID } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: game, status, error } = useSelector((state) => state.game);
  const storeMap = useSelector((state) => state.stores.storeMap);

  useEffect(() => {
    dispatch(fetchGameById(gameID));
    return () => dispatch(clearGame());
  }, [dispatch, gameID]);

  if (status === "loading")
    return <p className="text-center mt-8">Loading game...</p>;
  if (status === "failed")
    return <p className="text-center text-red-500 mt-8">Error: {error}</p>;
  if (status !== "succeeded" || !game) return null;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 hover:underline text-md hover:cursor-pointer"
      >
        ← Go Back
      </button>

      <h2 className="text-3xl font-bold mb-4">{game.info.title}</h2>
      <img
        src={game.info.thumb}
        alt={game.info.title}
        className="w-40 h-auto mb-4 rounded shadow"
      />

      <div className="mb-4">
        <p className="text-lg">
          <strong>Cheapest Ever:</strong> ${game.cheapestPriceEver.price}
        </p>
        <p>
          <strong>Cheapest Price Date:</strong>{" "}
          {new Date(game.cheapestPriceEver.date * 1000).toLocaleDateString()}
        </p>
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-2">Available Deals:</h3>
      <ul className="space-y-4">
        {game.deals.map((d) => {
          const store = storeMap[d.storeID];
          return (
            <li key={d.dealID} className="border p-4 rounded shadow-sm">
              {store && (
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={`https://www.cheapshark.com${store.images.logo}`}
                    alt={store.storeName}
                    className="w-6 h-6"
                  />
                  <span className="text-sm text-gray-700 font-medium">
                    {store.storeName}
                  </span>
                </div>
              )}
              <p>
                <strong>Sale Price:</strong> ${d.price}
              </p>
              <p>
                <strong>Retail:</strong> ${d.retailPrice}
              </p>
              <p>
                <strong>Savings:</strong> {parseFloat(d.savings).toFixed(2)}%
              </p>
              <a
                href={`https://www.cheapshark.com/redirect?dealID=${d.dealID}`}
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Deal
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
