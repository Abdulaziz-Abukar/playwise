import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDeals } from "./dealsSlice";
import { Deals } from "./Deals";

export function DealsList() {
  const { dealsList, status, error } = useSelector((state) => state.deals);
  const dispatch = useDispatch();
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchDeals());
      setVisibleCount(12);
    }
  }, [dispatch, status]);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;

      if (isBottom && visibleCount < dealsList.length) {
        setVisibleCount((prev) => prev + 6);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleCount, dealsList.length]);

  return (
    <>
      {status === "loading" && <p>Loading Deals...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && (
        <Deals results={dealsList.slice(0, visibleCount)} />
      )}
      {visibleCount < dealsList.length && status === "succeeded" && (
        <p className="text-center text-sm text-gray-400 mt-6">
          Loading more...
        </p>
      )}
    </>
  );
}
