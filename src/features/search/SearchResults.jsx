import React from "react";

export function SearchResults({ results }) {
  return results.map((game) => (
    <section key={game.gameID}>
      <p>{game.external}</p>
      <p>{game.cheapest}</p>
      <img src={game.thumb} alt={game.external} />
    </section>
  ));
}
