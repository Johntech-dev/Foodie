import React from 'react'

const Loadingspinner = () => {
  return (
    <div className='h-screen flex  justify-center items-center'>
        <span className='animate-pulse'><img className=' h-14' src='logo.png' /></span>
    </div>
  )
}

export default Loadingspinner