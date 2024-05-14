import React from "react";
import { Search_Bar } from "./Search_Bar";
import { Books } from "./Books";

export const SearchPage = () => {
  return (
    <div style={{ padding: "3rem" }}>
      <h1>Search for Books here</h1>
      <Books />
    </div>
  );
};
