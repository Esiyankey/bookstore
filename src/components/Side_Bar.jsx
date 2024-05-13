import React from 'react'
import '../styles/Homepage.css'
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { FaRegChartBar } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";

export const Side_Bar = () => {
  return (
    <div className='side-bar'>
      <div className='heading'>
      <div>
        My <span style={{color:"#ea7750"}}>Book</span>
      </div>
      <div className='shelf'> Shelf</div>{" "}
      </div>
      <div className="links">
        <Link to="/home" className='link-li'><AiFillHome />Home</Link>
        <Link to="/home/main/search" className='link-li'><IoIosSearch />Search</Link>
        <Link to="/home/main/categories" className='link-li'><FaRegChartBar />Categories</Link>
        <Link to="/payments" className='link-li'><MdOutlinePayments />Payments</Link>

      </div>
    </div>
  )
}
