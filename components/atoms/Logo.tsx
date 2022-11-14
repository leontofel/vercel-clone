import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center ml-3 cursor-pointer">
        <svg
          width="35"
          height="25"
          viewBox="0 0 76 65"
          fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff" />
        </svg>
        <h1 className="text-white text-2xl font-bold antialiased font-sans tracking-wider" >Vercel</h1>
      </div>
  )
}

export default Logo;