import React, { useState } from 'react'
import { Navbar, Sidebar, ContentArea, Footer } from '../components'

const MainFeed = () => {
  const [ sidebarState, setSidebarState ] = useState(false)

  const handleSidebarState = () => {
    setSidebarState(!sidebarState)
  }

  const mouseState = () => {
    setSidebarState(true)
  }

  const closeSidebar = () => {
    setSidebarState(false)
  }


  return (
    <div>
        <Navbar />
        <div className='flex flex-row'>
          <Sidebar 
            handleSidebarState={handleSidebarState}
            mouseState={mouseState}
            sidebarState={sidebarState}
          />

          <ContentArea 
            onClick={closeSidebar}
            sidebarState={sidebarState}
          />

        </div>

        <Footer />

    </div>
  )
}

export default MainFeed