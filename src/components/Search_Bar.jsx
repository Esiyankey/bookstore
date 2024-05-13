import React, { useState,useEffect } from "react";
import { GoTriangleDown } from "react-icons/go";
import { FaStaylinked } from "react-icons/fa6";
import { GiBookshelf } from "react-icons/gi";
import image from "../assets/aroundImage.png";
import { IoIosSearch } from "react-icons/io";
import Aos from "aos";
import 'aos/dist/aos.css';

export const Search_Bar = () => {
  useEffect(()=>{
    Aos.init({duration: 150});
  })

  const [search, setSearch] = useState("");
  const [showdropdown, setShowDropdown] = useState(false);
  const searchBook = () => {
    if (event.key === "Enter") {
      console.log("hello");
      setSearch("");
    }
  };
  const handleClick = () => {
    console.log("clicked");
    setSearch("");
  };
  const handleShowDropDown = () => {
    setShowDropdown(!showdropdown);
  };
  return (
    <div className="main-searchbar">
      <div className="search">
        <div className="all">All</div>
        <div className="search-space">
          <input
            type="text"
            className="input-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={searchBook}
            placeholder="Search"
          />
          <IoIosSearch
            className="searchbar-icons"
            onClick={handleClick}
            style={{ fontSize: "20px" }}
          />
        </div>

        <div className="dot">
          <FaStaylinked className="searchbar-icons" />
        </div>
      </div>

      <div className="categories-dropdown">
        <div className="categories">
          <div>
            <GiBookshelf className="searchbar-icons" />
            Categories
            <GoTriangleDown onClick={handleShowDropDown} />
          </div>
        </div>

        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          className={`dropdown ${showdropdown ? "dropdown-active" : ""}`}
        >
          <ul>
            <li>Education</li>
            <li>Agriculture</li>
            <li>Technology</li>
            <li>Farming</li>
          </ul>
        </div>
      </div>
      <div className="profile">
        <img src={image} alt="image" className="image" width={25} height={20} />
        Adwoa
        <GoTriangleDown />
      </div>
    </div>
  );
};
