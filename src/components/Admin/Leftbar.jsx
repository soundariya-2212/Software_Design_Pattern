import React from 'react'

const Leftbar = () => {
  return (
    <div className='h-screen w-1/6 flex justify-center items-center flex-col'>
        <div className='h-5/6 w-full flex justify-start items-center py-5'>
            links
        </div>
        <div className='h-5/6 w-full flex justify-start items-center py-5'>
            logout
        </div>
    </div>
  )
}

export default Leftbar