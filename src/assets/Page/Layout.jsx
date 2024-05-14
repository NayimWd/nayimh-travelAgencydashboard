import React from 'react'
import Sidebar from '../../layout/layoutComponent/Sidebar'
import Dashboard from './Dashboard'

const Layout = () => {
  return (
    <div className='flex'>
        <div className='ticky top-0 overflow-y-auto scrolbar-hidden py-4 flex flex-col ml-1'>
        <Sidebar/>
        </div>
        <Dashboard/>
    </div>
  )
}

export default Layout