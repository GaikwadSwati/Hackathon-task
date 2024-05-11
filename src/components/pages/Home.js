import React from 'react'
import image from '../../assets/images/logo.png'

const Home = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <img src={image} alt="image" className='mx-auto h-[150px]' />
        <p className="mt-4 text-lg">Welcome to Digitalflake Admin</p>
      </div>
    </div>
    
    </>
  )
}

export default Home