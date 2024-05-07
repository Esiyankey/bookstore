import React from "react";
import { SideBar } from "./sidebar";
import { HomepageMain } from "./HomepageMain";

export const Homepage = () => {
  return (
    <div className="homepage-background">
      <div className="homepage-subbackground">
        <SideBar/>
        <HomepageMain/>
      </div>
    </div>
  );
};
