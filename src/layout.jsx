import React from 'react'
import Navbar from './components/header/Navbar'
import Footer from './components/footer/Footer'
import ScrollToTop from './components/scrollToTop/ScrollToTop'
import ScrollUp from './components/commons/ScrollUp'

const Layout = ({children}) => {
  return (
    <div className="dark:bg-black w-full ">
      <ScrollUp />
      <Navbar />
      {children}
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Layout
