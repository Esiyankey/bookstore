import React from "react";
import "../styles/Homepage.css";
import { Search_Bar } from "./Search_Bar";
import { Outlet } from "react-router-dom";
import { Outlet__Page } from "./Outlet__Page";

export const HomepageMain = () => {
  return (
      <Outlet__Page/>
  );
};
