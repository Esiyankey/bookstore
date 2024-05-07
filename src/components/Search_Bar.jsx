import React from "react";
import { GoTriangleDown } from "react-icons/go";
import { FaStaylinked } from "react-icons/fa6";
import { GiBookshelf } from "react-icons/gi";
import image from "../assets/aroundImage.png";

export const Search_Bar = () => {
  return (
    <div className="main-searchbar">
      <div className="search">
        <div className="all">
          {" "}
          All <GoTriangleDown />
        </div>
        <input className="search-space" type="text" placeholder="Search" />
        <div className="dot">
          <FaStaylinked className="searchbar-icons"/>
        </div>
      </div>
      <div className="categories">
        <GiBookshelf className="searchbar-icons"/>
        Categories
        <GoTriangleDown />
      </div>
      <div className="profile">
        <img src={image} alt="image" className="image" width={25} height={20} />
        Adwoa
        <GoTriangleDown />
      </div>
    </div>
  );
};
