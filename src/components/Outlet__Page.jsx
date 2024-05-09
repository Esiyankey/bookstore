import React from 'react'
import { Quote } from './Quote'
import { Books } from './Books'

export const Outlet__Page = () => {
  return (
    <div style={{marginTop:"5rem", paddingLeft:"2rem"}}>
       <Quote/>
        <div className="recommended">
            <h2 style={{fontSize:"2.5rem",marginBottom:"2rem"}}>Good Morning</h2>
            <h4 style={{fontSize:"1.2rem"}}>Recommended for You</h4>
           <Books/>
        </div>
    </div>
  )
}
