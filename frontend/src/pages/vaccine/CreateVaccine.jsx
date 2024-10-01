import React from 'react'
import { MdOutlineVaccines } from 'react-icons/md'

function CreateVaccine({open, onClose}) {
  return (
    <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center  transition-colors z-10 ${open ? "visible bg-black/50" : "invisible"}`}>
    <div className='bg-white p-6 rounded-lg shadow-lg w-1/3 h-fit py-12'>
    <div className='flex justify-between items-center'>
      <h1 className='text-center text-3xl text-primary capitalize pt-4'>add vaccine</h1>
    <MdOutlineVaccines size={65} color='#047481'/>
    </div>
      {/* <p className='text-center text-gray-500 mt-2'>please enter the informstion of the vaccines</p> */}
      <div className='w-full flex flex-col gap-y-8 py-4 mt-6 '>
        <input placeholder='Name' typeof='text' className='p-3 border-2 border-gray-300 rounded-lg focus:border-gray-300 outline-none' />
        
        <input placeholder='Administration method' typeof='text' className='p-3 border-2 border-gray-300 rounded-lg focus:border-gray-300 outline-none' />
        <input placeholder='preventive disease' typeof='text' className='p-3 border-2 border-gray-300 rounded-lg focus:border-gray-300 outline-none' />
        <div className='flex justify-between items-center gap-4 mt-4'>
          <button onClick={onClose} className='w-full p-4 rounded-lg bg-tetiary font-bold hover:bg-red-200'>cancel</button>
          <button className='w-full p-4 rounded-lg bg-primary/75 hover:bg-primary text-white font-bold'>save</button>
        </div>
      </div>

    </div>
  </div>
  )
}

export default CreateVaccine