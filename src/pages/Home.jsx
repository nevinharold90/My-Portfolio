import React from 'react'

const Home = () => {
  return (
    <div className='flex w-full bg-gray-100 text-gray-800'>
        {/* This is Navbar */}
        <div className="w-full flex justify-between p-3 custom-bg-color">
            <div className="flex items-center">
                <h1 className='text-2xl font-bold px-2 duration-300 hover:text-pink-300'>
                    Portfolio
                </h1>
            </div>
            <div className="w-auto flex gap-5 align-center mr-5">
                <h1 className='text-xl font-bold duration-300 hover:text-pink-300  p-2 rounded'>
                    Home
                </h1>
                <h1 className='text-xl font-bold duration-300 hover:text-pink-300 -1 p-2 rounded'>
                    About
                </h1>
                <h1 className='text-xl font-bold duration-300 hover:text-pink-300 -1 p-2 rounded'>
                    Capstone Project
                </h1>
                <h1 className='text-xl font-bold duration-300 hover:text-pink-300  p-2 rounded'>
                    Contact
                </h1>
            </div>
        </div>
    </div>
  )
}

export default Home