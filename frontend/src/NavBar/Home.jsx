import React from 'react'
import logo from './CryptoPediaLogo1.png';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-white pb-5'>
      <div >
        <img src={logo} alt="Logo Image" style={{ width: '350px' }} />
        </div>
        <div className='  '>
        <Link className=' pl-8' to="/Register">
                            <button className='text-white bg-green-600 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>Register</button>
                        </Link>
                   
                        <Link to="/Login">
                        <button className='text-white bg-green-600 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>Login</button>
                    </Link>
      </div>
    </div>
  )
}

export default Home