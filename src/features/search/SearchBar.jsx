import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGamesByTitle } from "./searchSlice";
import { SearchResults } from "./SearchResults";

export function SearchBar() {
  const { results, status, error } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);

  // Submission handler
  function searchHandler(e) {
    e.preventDefault();

    if (search.trim() === "") return;

    dispatch(fetchGamesByTitle(search));
    setVisibleCount(12);
    setSearch("");
  }

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;

      if (isBottom && visibleCount < results.length) {
        setVisibleCount((prev) => prev + 6); // Load 6 more
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleCount, results.length]);

  return (
    <>
      <form
        onSubmit={searchHandler}
        className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-6 mt-12"
      >
        <input
          type="text"
          name="searchGame"
          id="searchGame"
          placeholder="Search for a game..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-12 px-4 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg w-72"
        />
        <button
          type="submit"
          className="h-12 px-6 rounded-full bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition w-50 max-[640px]:mt-4 sm:w-auto"
        >
          Search
        </button>
      </form>

      {status === "idle" && results.length === 0 && (
        <div className="text-center text-gray-500 mt-8">
          <p className="text-xl">Start searching for great game deals!</p>
          <p className="text-sm mt-2">
            Enter a title and press Search to begin
          </p>
        </div>
      )}

      {status === "loading" && <p>Loading Game...</p>}
      {status === "failed" && <p>Error: {error}</p>}

      {status === "succeeded" && (
        <>
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            <SearchResults results={results.slice(0, visibleCount)} />
          </section>

          {visibleCount < results.length && (
            <div className="w-full flex justify-center mb-8">
              <p className="text-base text-gray-400">Loading more games...</p>
            </div>
          )}
        </>
      )}
    </>
  );
}
