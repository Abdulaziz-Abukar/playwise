import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mockSearchGames } from "./searchSlice";
import { SearchResults } from "./SearchResults";

export function SearchBar() {
  const { results, status, error } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  // Submission handler
  function searchHandler(e) {
    e.preventDefault();

    dispatch(mockSearchGames(search));
    setSearch("");
  }

  return (
    <>
      <form onSubmit={searchHandler}>
        <label htmlFor="searchGame"></label>
        <input
          type="text"
          name="searchGame"
          id="searchGame"
          placeholder="search for a game..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {status === "loading" && <p>Loading Game...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && <SearchResults results={results} />}
    </>
  );
}
