import React from 'react'
import logo from './CryptoPediaLogo1.png';

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-white pb-5'>
      <div >
    <img  src={logo} alt="Logo Image" style={{width :'350px'}}/>
    </div>
        </div>
  )
}

export default Navbar