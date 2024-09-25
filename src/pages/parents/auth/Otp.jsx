import React from 'react'
import ParentLayout from '../../../layouts/ParentLayout'

function Otp() {
  return (
    <>
    <div className="flex justify-center w-screen h-screen items-center m-auto">
      <div className=" bg-white md:w-2/5 h-96 rounded-xl shadow-lg">
        <div className="flex flex-col justify-center items-center">

        <h1 className="uppercase text-2xl text-primary  py-6 font-black">verification</h1>
        <p>an sms has been sent to <span>*******85</span> please enter the code from the sms</p>
        <div className="flex flex-col space-y-12 w-full px-12 mt-12">
          <input typeof="text" className="rounded-lg w-full text-gray-500 p-3 border border-gray-200 focus:border-gray-200 outline-none"/>
          <button className="w-full bg-primary p-3 rounded-lg hover:bg-primary/75 text-semibold text-white">verify</button>
        </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Otp