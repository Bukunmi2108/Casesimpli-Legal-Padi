import React, { useState } from 'react'
import { Navbar, Sidebar, Categories, Footer } from '../components'

const CategoriesContainer = () => {
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

          <Categories 
            onClick={closeSidebar}
            sidebarState={sidebarState}
          />

        </div>

        <Footer />

    </div>
  )
}

export default CategoriesContainer