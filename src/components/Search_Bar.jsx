import React, { useState, useEffect } from "react";
import { GoTriangleDown } from "react-icons/go";
import { FaStaylinked } from "react-icons/fa6";
import { GiBookshelf } from "react-icons/gi";
import image from "../assets/image.jpg";
import { IoIosSearch } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";
import { useBooks } from "../context/books_context";

export const Search_Bar = () => {
  useEffect(() => {
    Aos.init({ duration: 150 });
  });

  const [search, setSearch] = useState("");

  const { fetchBooks } = useBooks();
  const [showdropdown, setShowDropdown] = useState(false);
  const education="Education";
  const farming="Farming";
  const agriculture="Agriculture";
  const storybooks="Story books";
  const technology="Technology";

  const searchBook = async () => {
    if (event.key === "Enter") {
      await fetchBooks(search);
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
  const handleCategoriesEducation=async()=>{
    await fetchBooks(education)
  }
  const handleCategoriesStoryBooks=async()=>{
    await fetchBooks(storybooks)
  }
  const handleCategoriesAgriculture=async()=>{
    await fetchBooks(agriculture)
  }
  const handleCategoriesTechnology=async()=>{
    await fetchBooks(technology)
  }
  const handleCategoriesFarming=async()=>{
    await fetchBooks(farming)
  }
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
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"0.2rem"}}>
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
            <li onClick={handleCategoriesEducation}>Education</li>
            <li onClick={handleCategoriesAgriculture}>Agriculture</li>
            <li onClick={handleCategoriesTechnology}>Technology</li>
            <li onClick={handleCategoriesFarming}>Farming</li>
            <li onClick={handleCategoriesStoryBooks}>StoryBooks</li>
          </ul>
        </div>
      </div>
      <div className="profile">
        <img src={image} alt="image" className="image" width={25} height={20} />
        Adwoa
      </div>
    </div>
  );
};
