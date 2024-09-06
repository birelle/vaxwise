import React from 'react'
import { TextInput } from 'flowbite-react'
import { MdDoorbell } from 'react-icons/md'

function Navbar() {
  return (
    <div className='flex justify-between items-center w-full'>
       <input type="text" placeholder='Search' className='md:w-96 w-full h-12 text-sm text-main rounded-md bg-dry border border-gray-100 px-4 outline-none focus:border-white focus:outline-white' />

        <div className='flex w-40 justify-evenly items-center'>
            <MdDoorbell size={25}/>
            <div className='w-12 h-12 rounded-full bg-blue-300'></div>
            <p>Name</p>
        </div>
        
    </div>
  )
}

export default Navbar