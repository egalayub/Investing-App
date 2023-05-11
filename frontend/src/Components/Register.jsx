import React, { useState } from 'react'
import graph from './graph.jpg';
import { Link } from 'react-router-dom';
import Login from './Login';


function Register({ isShowRegister, setIsShowRegister,
    isShowLogin, setIsShowLogin }) {
    const [userName, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    let login = async (e) => {
        e.preventDefault();
        if (userName !== "") {
            if (firstName !== "") {
                if (lastName !== "") {
                    if (password !== "") {
                        try {
                            let res = await fetch("http://localhost:8080/api/user", {
                                method: "POST",
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    userName: userName,
                                    firstName: firstName,
                                    lastName: lastName,
                                    password: password,
                                }),
                            });

                            if (res.status === 200) {
                                setUserName("");
                                setFirstName("");
                                setLastName("");
                                setPassword("");
                                setMessage("User created successfully");
                                setIsShowRegister(!isShowRegister);
                                setIsShowLogin(!isShowLogin);
                            } else {
                                setMessage("Error occurred");
                            }
                        } catch (err) {
                            console.log(err);
                        }


                    }
                }
            }
        }
    };



    return (
        <div class='relative w-full h-screen bg-zinc-900/90' >
            <img className='absolute w-full h-full object-cover mix-blend-overlay' src={graph} alt="/" />

            <div className='flex justify-center items-center h-full'>
                <form onSubmit={login} className='max-w-[400px] w-full mx-auto bg-white p-4'>
                    <h2 className='text-4xl font-bold text-center py-6'>Cryptopedia</h2>
                    <div className='flex flex-col py-2'>
                        <label  >
                            Username
                        </label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 right-0 flex items-center px-2">

                            </div>
                            <input class="appearance-none border-2 rounded w-full py-3 px-3 leading-tight border-gray-300 bg-gray-100 focus:outline-none focus:border-green-600 focus:bg-white  pr-16  js-password"
                                value={userName}
                                onChange={(e) => {
                                    setUserName(e.target.value);
                                }}
                            />
                        </div>

                    </div>
                    <div className='flex flex-col py-2'>
                        <label  >
                            FirstName
                        </label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 right-0 flex items-center px-2">

                            </div>
                            <input class="appearance-none border-2 rounded w-full py-3 px-3 leading-tight border-gray-300 bg-gray-100 focus:outline-none focus:border-green-600 focus:bg-white  pr-16  js-password"
                                value={firstName}
                                onChange={(e) => {
                                    setFirstName(e.target.value);
                                }}
                            />
                        </div>

                    </div>
                    <div className='flex flex-col py-2'>
                        <label  >
                            LastName
                        </label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 right-0 flex items-center px-2">

                            </div>
                            <input class="appearance-none border-2 rounded w-full py-3 px-3 leading-tight border-gray-300 bg-gray-100 focus:outline-none focus:border-green-600 focus:bg-white  pr-16  js-password"
                                value={lastName}
                                onChange={(e) => {
                                    setLastName(e.target.value);
                                }}
                            />
                        </div>

                    </div>
                    <div className='flex flex-col py-2'>
                        <label class="" for="password">
                            Password
                        </label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 right-0 flex items-center px-2">
                            </div>
                            <input class="appearance-none border-2 rounded w-full py-3 px-3 leading-tight border-gray-300 bg-gray-100 focus:outline-none focus:border-green-600 focus:bg-white text-gray-700 pr-16 font-mono js-password" id="password" type="password" autocomplete="off"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <input name="name" />
                    <button type="submit" className='border w-full my-5 py-2 bg-green-600 hover:bg-green-800 relative text-white'>Create Account</button>
                    <Link to="/Login">
                        <button className='border w-full my-5 py-2 bg-green-600 hover:bg-green-800 relative text-white'>Go to Login</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Register;