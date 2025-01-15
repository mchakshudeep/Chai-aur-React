import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header/>
      {/* java outltet thega waha ka change hota rhega baki sab same rhega */}
        <Outlet /> 
      <Footer/>
    </>
  )
}

export default Layout
