import React, { useState } from 'react'

function CreateHealthcare({ onClose, open }) {
  return (
    <div className={`fixed inset-0 flex justify-center intems-center transition-colors ${open ? "visible bg-black/50" : "invisible"}`}>
      <div className='w-2/6 h-5/6 bg-white rounded-lg p-4'>
        <h1 className='text-center text-2xl text-green-400 capitalize py-12'>add healthecare</h1>
        <p className='text-center text-gray-500'>please enter the informstion o the healthcare personel</p>
        <div className='w-full flex flex-col gap-y-4 py-4 '>
          <input placeholder='Name' typeof='text' className='p-3 border-2 border-gray-300 rounded-lg focus:border-gray-300 outline-none' />
          <input placeholder='Email' typeof='text' className='p-3 border-2 border-gray-300 rounded-lg focus:border-gray-300 outline-none' />
          <input placeholder='Matricle' typeof='text' className='p-3 border-2 border-gray-300 rounded-lg focus:border-gray-300 outline-none' />
          <input placeholder='City' typeof='text' className='p-3 border-2 border-gray-300 rounded-lg focus:border-gray-300 outline-none' />
          <div className='flex justify-between items-center gap-4 mt-5'>
            <button onClick={onClose} className='w-full p-4 rounded-lg bg-tetiary font-bold hover:bg-red-200'>cancel</button>
            <button className='w-full p-4 rounded-lg bg-primary/75 hover:bg-primary text-white font-bold'>save</button>
          </div>
        </div>

      </div>
    </div>



  )
}

export default CreateHealthcare