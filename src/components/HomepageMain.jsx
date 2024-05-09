import React from 'react'
import '../styles/Homepage.css'
import { Search_Bar } from './Search_Bar'
import { Outlet__Page } from './Outlet__Page'

export const HomepageMain = () => {
  return (
    <div className='homepage-main'> 
    <Search_Bar/>
    <Outlet__Page/>
    </div>
  )
}
