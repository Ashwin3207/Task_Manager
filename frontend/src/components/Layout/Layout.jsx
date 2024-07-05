import React from 'react'
import Footer from './Footer.jsx'
import Header from './Header.jsx'

const Layout = ({children}) => {
  return (
<div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow min-h-[80vh]">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout;
