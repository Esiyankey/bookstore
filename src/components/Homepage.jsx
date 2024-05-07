import React from "react";
import { HomepageMain } from "./HomepageMain";
import { Side_Bar } from "./Side_Bar";
import '../styles/Homepage.css'

export const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage-subbackground">
        <Side_Bar />
        <HomepageMain />
      </div>
    </div>
  );
};
