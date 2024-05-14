import React from "react";
import { HomepageMain } from "./HomepageMain";
import { Side_Bar } from "./Side_Bar";
import "../styles/Homepage.css";
import { Search_Bar } from "./Search_Bar";
import { Outlet } from "react-router-dom";
import { BooksProvider } from "../provider/books_provider";

export const Homepage = () => {
  return (
    <BooksProvider>
      <div className="homepage">
        <div className="homepage-subbackground">
          <Side_Bar />
          <div className="homepage-main">
            <Search_Bar />
            <Outlet />
          </div>
        </div>
      </div>
    </BooksProvider>
  );
};
