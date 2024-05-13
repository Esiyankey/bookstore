import React from 'react'
import '../styles/Homepage.css'
import { Search_Bar } from './Search_Bar'
import { Outlet } from 'react-router-dom'

export const HomepageMain = () => {
  return (
    <div className='homepage-main'> 
    <Search_Bar/>
    <Outlet/>
    </div>
  )
}
