import React, { useState } from 'react'
import '../styles/Homepage.css'
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { FaRegChartBar } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";

export const Side_Bar = () => {
const [active,setActive]=useState(null)
const handleActive =(id)=>{
    setActive(id)
}

  return (
    <div className='side-bar'>
      <div className='heading'>
      <div>
        My <span style={{color:"#ea7750"}}>Book</span>
      </div>
      <div className='shelf'> Shelf</div>{" "}
      </div>
      <div className="links">
        <Link to="/home" className={`link-li ${active === 0 ? 'active-link' : ''}`} onClick={()=>{handleActive(0)}}><AiFillHome />Home</Link>
        <Link to="/home/search" className={`link-li ${active === 1 ? 'active-link' : ''}`} onClick={()=>{handleActive(1)}}><IoIosSearch />Search</Link>
        <Link to="/home/categories" className={`link-li ${active === 2 ? 'active-link' : ''}`} onClick={()=>{handleActive(2)}}><FaRegChartBar />Categories</Link>
        <Link to="/payments" className={`link-li ${active === 3 ? 'active-link' : ''}`} onClick={()=>{handleActive(3)}}><MdOutlinePayments />Payments</Link>

      </div>
    </div>
  )
}
