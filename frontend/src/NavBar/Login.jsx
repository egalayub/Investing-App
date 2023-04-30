import React, { useState } from 'react'
import graph from './graph.jpg';
import Register from './Register';
import { Link } from 'react-router-dom';

function Login({ isShowLogin, user, setUser, setIsShowLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://localhost:8080/api/users", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            let resJson = await res.json();
            if (res.status === 200) {
                for (let i = 0; i < resJson.length; i++) {
                    if (resJson[i].userName === username) {
                        if (resJson[i].password === password) {
                            setUser(resJson[i]);
                            setIsShowLogin(!isShowLogin);
                        } else {
                            document.querySelector("passbox").value = "";
                        }
                    }
                }
            }
        } catch (err) {
            console.log(err);
        }
    };


    return (

        <div className='relative w-full h-screen bg-zinc-900/90'>
            <img className='absolute w-full h-full object-cover mix-blend-overlay' src={graph} alt="/" />

            <div className='flex justify-center items-center h-full'>
                <form onSubmit={handleSubmit} className='max-w-[400px] w-full mx-auto bg-white p-4'>
                    <h2 className='text-4xl font-bold text-center py-6'>Cryptopedia</h2>
                    <div className='flex flex-col py-2'>
                        <label  >
                            Username
                        </label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 right-0 flex items-center px-2">

                            </div>
                            <input class="appearance-none border-2 rounded w-full py-3 px-3 leading-tight border-gray-300 bg-gray-100 focus:outline-none focus:border-green-600 focus:bg-white  pr-16  js-password"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                    </div>
                    <div className='flex flex-col py-2'>
                        <label class="font-medium block mb-1 mt-6 text-gray-700" for="password">
                            Password
                        </label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 right-0 flex items-center px-2">
                                <input class="hidden js-password-toggle" id="toggle" type="checkbox" />
                            </div>
                            <input class="appearance-none border-2 rounded w-full py-3 px-3 leading-tight border-gray-300 bg-gray-100 focus:outline-none focus:border-green-600 focus:bg-white  pr-16 js-password" id="password" type="password" autocomplete="off"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <input name="name" type="text" />
                    <button type="submit" className='border w-full my-5 py-2 bg-green-600 hover:bg-green-800 relative text-white'>Sign In</button>
                    <div className='flex justify-between'>
                        <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                        <Link to="/Register">
                            <button className='border w-full my-5 py-2 bg-green-600 hover:bg-green-800 relative text-white'>Create Account</button>
                        </Link>
                        <div>

                        </div>

                    </div>

                </form>
            </div>
        </div>

    )
}

export default Login