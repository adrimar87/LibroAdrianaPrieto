import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../Navbar/Menu'

const Layout = () => {
  return (
      <>
      <Menu/>
      <Outlet/>
      </>
    
  )
}

export default Layout