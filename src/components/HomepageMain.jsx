import React,{useState} from 'react'
import '../styles/Homepage.css'
import { Search_Bar } from './Search_Bar'
import { Outlet__Page } from './Outlet__Page'

export const SearchContext = React.createContext()

export const HomepageMain = () => {

  const [search,setSearch]=useState("flowers")
  const searchBook =()=>{
    if (event.key === 'Enter') {
      console.log("hello")
      setSearch("")
    }
  }
  const handleClick=()=>{
    console.log("clicked")
    setSearch("")
    console.log(search)
  }
  const getSearchValue =(e)=>{
    setSearch(e.target.value)
  }
  const handlefocus=()=>{
    setSearch("")
  }

  const searchContent ={
    searchBookFunction: searchBook,
    clickFunction:handleClick,
    getSearchValueFunction:getSearchValue,
    searchValue: search,
    onFocus:handlefocus,
  }
  return (
    <div className='homepage-main'> 
      <SearchContext.Provider value={searchContent}>
        <Search_Bar/>
        <Outlet__Page/>
      </SearchContext.Provider>
    </div>
  )
}
