import React from 'react'
import { MdOutlineVaccines } from 'react-icons/md'

function History() {
  return (
    <div className='w-full flex justify-center items-center mt-12 h-scree overflow-y-scroll'>
        <div className='flex justify-center w-2/3 bg-white rounded-lg shadow-lg '>
          <div className='flex justify-center items-center w-1/2'>
          <p className='w-2/6 text-3xl capitalize'>vaccition history</p>
          <MdOutlineVaccines size={75}/>
          </div>
        </div>
    </div>
  )
}

export default History