import React from 'react'
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div>
      <main className='min-h-screen container'>
        {/* Header */}
        {/* body */}
        <Outlet />
      </main>
      {/* footer */}
      <div className='p-10 text-center bg-gray-800 mt-10'>
        Nisarg Patel
      </div>
    </div>
  )
}

export default AppLayout;
