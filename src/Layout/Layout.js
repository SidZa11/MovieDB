import React, { useEffect } from 'react'
import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer';

const Layout = ({children}) => {

  useEffect(() => {
    // Scroll to the top of the page whenever the content (children) changes
    window.scrollTo(0, 0);
  }, [children]);
  return (
    <>
        <Navbar />
          <main>{children}</main>
        <Footer />
    </>
  )
}

export default Layout