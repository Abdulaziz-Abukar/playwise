import React from "react";

export function Deals({ results }) {
  return results.map((gameDeal) => (
    <section key={gameDeal.dealID}>
      <p>Title: {gameDeal.title}</p>
      <p>Normal Price: {gameDeal.normalPrice}</p>
      <p>Sale Price: {gameDeal.salePrice}</p>
      <img src={gameDeal.thumb} alt={gameDeal.title} />
    </section>
  ));
}
