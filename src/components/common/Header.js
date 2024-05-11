import React from 'react'


const Header = () => {
  return (
    <>
          <nav className="flex items-center justify-between purple text-white p-4 min-h-20">
        <div className="flex items-center">
          <span className="text-lg font-bold">Your Logo</span>
        </div>

        <div className="flex items-center">
          <span className="text-sm mr-4">Welcome, Username</span>
        </div>
      </nav>
    </>
  )
}

export default Header