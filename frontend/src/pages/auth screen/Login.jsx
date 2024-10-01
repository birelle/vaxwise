import React from 'react'
import { Link } from 'react-router-dom'
import loginImg from './images/auth.svg';

function Login() {
  return (
    <div className="w-[100vw] h-screen flex justify-center items-center">
        <div className='w-[60%] h-screen flex justify-center bg-[#f2f9fe]'>
        <img src={loginImg} alt="signup image" className='w-4/6 '/>
        </div>
        <div className="w-[40%] h-screen px-12 flex flex-col justify-center bg-white">
            <div className="py-8 mt-12 text-xl font-semibold">welcome back</div>
            <p className='mt-2'>we are glad to have you here again, sign in and continue enjoying our service</p>
            <div className="flex flex-col justify-center items-center w-full gap-6 mt-4">
                <div className="w-full">
                    <label htmlFor="email" className='capitalize'>email</label>
                    <input type="text" placeholder='Email' className='w-full p-2 rounded-lg border-gray-200 outline-none focus:border-gray-200' />
                </div>
                <div className="w-full">
                    <label htmlFor="email" className='capitalize'>password</label>
                    <input type="password" placeholder='Password' className='w-full p-2 rounded-lg border-gray-200 outline-none focus:border-gray-200' />
                </div>
                <button className='w-full rounded-lg font-bold capitalize bg-[#102542] p-2 text-white'>login</button>
                <p>Already have an account? <span><Link to="/signup">Register</Link></span></p>
            </div>
        </div>
    </div>
  )
}

export default Login