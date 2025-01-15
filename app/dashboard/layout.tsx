import React from 'react'

function layout({children} : {children: React.ReactNode}) {
  return (
    <div>
        <h1 className='text-3xl'>Dahboard Navbar</h1>
        {children}
    </div>
  )
}

export default layout