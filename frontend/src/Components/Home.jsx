import React from 'react'
import logo from './CryptoPediaLogo1.png';
import { Link } from 'react-router-dom';
import background from './background.jpg'
const Home = () => {
  return (
    <div>
      <section class="flex flex-col min-h-screen bg-green-800 text-white bg-center bg-cover bg-blend-overlay bg-fixed bg-black/30" style={{ backgroundImage: `url(${background})` }}>
        {/* <!-- Navbar --> */}
        <div class="flex items-center h-20">
          {/* <!-- Navbar Container --> */}
          <div class="mx-auto relative px-5 max-w-screen-xl w-full flex items-center justify-end">
            {/* <!-- Navbar Logo --> */}
            <div class="text-4xl font-light uppercase absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
              <img src={logo} style={{ width: '350px' }} />
            </div>

            <nav class="flex gap-5">
              <a><Link to="/Register">
                <button className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>Register</button>
              </Link></a>
              <a><Link to="/Login">
                <button className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'> Login</button>
              </Link></a>
            </nav>
          </div>
        </div>
        <div class="flex-1 flex items-center">
          <div class="text-center mx-auto">
            <h1 class="text-6xl font-semibold">Welcome to Cryptopedia</h1>
            <p class="font-light text-3xl mt-5">the ultimate resource for exploring the world of cryptocurrencies.</p>
            <a class="px-5 py-2 inline-block bg-cyan-500 text-white hover:bg-cyan-400 transition-colors mt-10" href="">Get Started</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home