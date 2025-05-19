import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { mockFetchDeals } from "./dealsSlice";
import { Deals } from "./Deals";

export function DealsList() {
  const { results, status, error } = useSelector((state) => state.deals);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(mockFetchDeals());
    }
  }, [dispatch, status]);

  return (
    <>
      {status === "loading" && <p>Loading Deals...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && <Deals results={results} />}
    </>
  );
}
