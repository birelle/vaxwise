import React, { useState } from 'react'

function CreateRecipient({open, onClose}) {
  const [addParent, setAddParent] = useState(false);
  return (
    <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center  transition-colors ${open ? "visible bg-black/50" : "invisible"}`}>
    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 h-5/6  overflow-y-scroll">
      <h2 className="text-lg font-semibold mb-4">Add New Patient</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">date of birth</label>
          <input
            type="date"
            name="createdAt"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Gender</label>
          <select
            name="gender"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">parent</label>
          <select
            name="gender"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          >
            <option value="">Select parent</option>
            <option value="Male">john</option>
            <option value="Female">birelle</option>
          </select>
        </div>
        { addParent ? <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="number"
              name="age"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              name="contact"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">ID card Number</label>
            <input
              type="text"
              name="contact"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
        </div> : <></>}
        {/* add parent */}
        {addParent === false ? <div className='w-full flex justify-center  p-3 rounded-lg  bg-primary hover:bg-primary/75 text-white  my-6' onClick={()=>setAddParent(true)}>add parent</div> : <></> }
        
        <div className="w-full flex justify-between gap-4">
          <button
            type="button"
            className="w-full p-4 rounded-lg bg-tetiary font-bold hover:bg-red-200"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
          >
            Add Patient
          </button>
        </div>
      </form>
      
    </div>
  </div>
  )
}

export default CreateRecipient