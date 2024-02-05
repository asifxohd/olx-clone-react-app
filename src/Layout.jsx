import React from 'react'
import Navbar from './navbar/Navbar'
import SecondNavbar from './navbar/SecondNavbar'
import Footer from './Footer/Footer'

function Layout({children}) {
  return (
    <>
    <Navbar/>
    <SecondNavbar/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout