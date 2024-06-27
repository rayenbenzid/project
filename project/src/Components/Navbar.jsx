import React, { useState } from 'react'

const Navbar = ({setpage,setsearch,setshow_add}) => {
  return (
    <div className='nav'>
      <h1>Game Zone</h1>
      <ul>
      <li onClick={()=>setshow_add(true)} >Add Product</li>
        <li>Search:<input type="text" onChange={(e)=>setsearch(e.target.value)}  /></li>
        <li onClick={()=>setpage(0)} >Logout</li>
      </ul>
    </div>
  )
}

export default Navbar