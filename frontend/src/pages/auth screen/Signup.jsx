import React from 'react'
import signupImg from './images/signup.svg'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className="w-[100vw] h-screen flex justify-center items-center ">
    <div className='w-[60%] h-screen flex justify-center bg-[#f2f9fe]'>
        <img src={signupImg} alt="signup image" className='w-4/6 '/>
    </div>
    <div className="w-[40%] h-screen px-12 flex flex-col justify-center bg-white">
        <div className="py-8 mt-12 text-xl font-semibold capitalize">create account</div>
        <p className="text-gray-400 text-md">sign up for an account</p>
        <p className='mt-2 text-sm'>we are glad to have you here again, sign un and  enjoy the best services</p>
        <div className="flex flex-col justify-center items-center w-full gap-6 mt-4">
            <div className="w-full">
                <label htmlFor="name" className='capitalize'>first name</label>
                <input type="text" placeholder='Frist Name' className='w-full p-2 rounded-lg border-gray-200 outline-none focus:border-gray-200' />
            </div>
            <div className="w-full">
                <label htmlFor="name" className='capitalize'>last name</label>
                <input type="text" placeholder='Last Name' className='w-full p-2 rounded-lg border-gray-200 outline-none focus:border-gray-200' />
            </div>
            <div className="w-full">
                <label htmlFor="email" className='capitalize'>Email</label>
                <input type="text" placeholder='Email' className='w-full p-2 rounded-lg border-gray-200 outline-none focus:border-gray-200' />
            </div>
            <div className="flex justify-center items-center gap-3 w-full">
            <div className="w-full">
                <label htmlFor="password" className='capitalize'>password</label>
                <input type="text" placeholder='password' className='w-full p-2 rounded-lg border-gray-200 outline-none focus:border-gray-200' />
            </div>
            <div className="w-full">
                <label htmlFor="cpassword" className='capitalize'>confirm password</label>
                <input type="password" placeholder='Repeat Password' className='w-full p-2 rounded-lg border-gray-200 outline-none focus:border-gray-200' />
            </div>
            </div>
            <button className='w-full rounded-lg font-bold capitalize bg-[#102542] p-2 text-white'>Sign Up</button>
            <p>Already have an account? <span><Link to="/login">Login</Link></span></p>
        </div>
    </div>
</div>
  )
}

export default Signup