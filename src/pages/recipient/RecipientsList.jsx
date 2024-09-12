// import React from 'react'
// import DashboardLayout from '../../layouts/DashboardLayout'
// import { IoTimeOutline } from "react-icons/io5";
// function RecipientsList() {
//   return (
//     <DashboardLayout>
//       <div className='w-full flex gap-10'>
//         <div className='w-flex flex-col gap-5 bg-white rounded-xl border p-8   w-80 '>
//           <h1>today patient </h1>
//           <div className='flex items-center justify-between'> 
//               <div className="bg-secondary p-2 rounded-md w-10 h-10 flex justify-center items-center">
//                 <p> 10 </p> 
//               </div>
//                  <IoTimeOutline color='#66b5a3' size={35}/>
//             </div>
//           <div className=' justify-center'>
//             <p className='text-sm text-gray-400'> monthly patient 391 today</p>
//           </div>
//         </div>
//         <div className='flex flex-col gap-5 bg-white rounded-xl border p-4 w-80 '>
//           <h1>today patient </h1>
//           <div className='flex items-center justify-between'> 
//               <div className="bg-secondary p-2 rounded-md w-10 h-10 flex justify-center items-center">
//                 <p> 10 </p> 
//               </div>
//                  <IoTimeOutline color='#66b5a3' size={35}/>
//             </div>
//           <div className=' justify-center'>
//             <p className='text-sm text-gray-400'> total  of patient 10 today</p>
//           </div>
//         </div>
//         <div className='flex flex-col gap-5 bg-white rounded-xl border p-4 w-80 '>
//           <h1>today patient </h1>
//           <div className='flex items-center justify-between'> 
//               <div className="bg-secondary p-2 rounded-md w-10 h-10 flex justify-center items-center">
//                 <p> 10 </p> 
//               </div>
//                  <IoTimeOutline color='#66b5a3' size={35}/>
//             </div>
//           <div className=' justify-center'>
//             <p className='text-sm text-gray-400'> total  of patient 10 today</p>
//           </div>
//         </div>

//       </div>
//     </DashboardLayout>
//   )
// }

// export default RecipientsList

import React, { useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { IoTimeOutline } from 'react-icons/io5';

function RecipientsList() {
  const [sortValue, setSortValue] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [newPatient, setNewPatient] = useState({ name: '', createdAt: '', gender: '', age: '', contact: '' });
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: 'Hugo Lloris',
      createdAt: '20 Aug 2021',
      gender: 'Male',
      age: 25,
      contact: '+1 234 567 890',
      avatar: 'https://i.pravatar.cc/40',
    },
    {
      id: 2,
      name: 'Mauris Auctor',
      createdAt: '22 Nov 2023',
      gender: 'Female',
      age: 34,
      contact: '+1 456 789 123',
      avatar: 'https://i.pravatar.cc/41',
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [patientPhases, setPatientPhases] = useState({});

  const handleSortChange = (event) => {
    setSortValue(event.target.value);
    // Add sorting logic here
  };

  const handleGenderFilterChange = (event) => {
    setGenderFilter(event.target.value);
    // Add gender filter logic here
  };

  const handleFilter = () => {
    // Filter logic implementation based on sortValue and genderFilter
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPatient({ ...newPatient, [name]: value });
  };

  const handleAddPatient = () => {
    setPatients([
      ...patients,
      {
        id: patients.length + 1,
        ...newPatient,
        avatar: 'https://i.pravatar.cc/42', // Placeholder avatar
      },
    ]);
    setNewPatient({ name: '', createdAt: '', gender: '', age: '', contact: '' });
    setShowForm(false);
  };

  const handlePhaseChange = (id, event) => {
    setPatientPhases({ ...patientPhases, [id]: event.target.value });
  };

  return (
    <DashboardLayout>
      <div className="w-full flex flex-wrap gap-10 p-6 m-5">
        {/* Dashboard Cards */}
        <div className="w-flex flex-col gap-5 bg-white rounded-xl border p-8 w-80">
          <h1>Today's Patients</h1>
          <div className="flex items-center justify-between">
            <div className="bg-secondary p-2 rounded-md w-10 h-10 flex justify-center items-center">
              <p>10</p>
            </div>
            <IoTimeOutline color="#66b5a3" size={35} />
          </div>
          <div className="justify-center">
            <p className="text-sm text-gray-400">Total of patient today 10 </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 bg-white rounded-xl border p-4 w-80">
          <h1>Total Patients this month</h1>
          <div className="flex items-center justify-between">
            <div className="bg-secondary p-2 rounded-md w-10 h-10 flex justify-center items-center">
              <p>10</p>
            </div>
            <IoTimeOutline color="#66b5a3" size={35} />
          </div>
          <div className="justify-center">
            <p className="text-sm text-gray-400">Total of 10 patients today</p>
          </div>
        </div>
        <div className="flex flex-col gap-5 bg-white rounded-xl border p-4 w-80">
          <h1>Total Patients Today</h1>
          <div className="flex items-center justify-between">
            <div className="bg-secondary p-2 rounded-md w-10 h-10 flex justify-center items-center">
              <p>10</p>
            </div>
            <IoTimeOutline color="#66b5a3" size={35} />
          </div>
          <div className="justify-center">
            <p className="text-sm text-gray-400">Total of 300 patients This month</p>
          </div>
        </div>
      </div>

      {/* Patients Table with Sort By and Filter */}
      <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        <div className="flex justify-between items-center mb-6">
          {/* Search input */}
          <input
            type="text"
            id="searchInput"
            placeholder="Search Patients"
            className="w-1/3 p-2 border border-gray-300 rounded-lg m-6"
            onKeyUp={() => filterTable()}
          />

          {/* Gender Filter */}
          <select
            id="genderFilter"
            className="w-1/4 p-2 border border-gray-300 rounded-lg m-6"
            value={genderFilter}
            onChange={handleGenderFilterChange}
          >
            <option value="">Gender...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          {/* Sort By */}
          <select
            id="sortBy"
            className="w-1/4 p-2 border border-gray-300 rounded-lg m-6"
            value={sortValue}
            onChange={handleSortChange}
          >
            <option value="">Sort By...</option>
            <option value="name">Name</option>
            <option value="age">Age</option>
          </select>
          <input
            type="date"
            id="dateFilter"
            className="w-1/4 p-2 border border-gray-300 rounded-lg m-6"
            onChange={() => filterTable()}
          />

          {/* Filter Button */}
          <button
            className="p-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 m-6"
            onClick={handleFilter}
          >
            Filter
          </button>
        </div>

        {/* Patients Table */}
        <table id="patientTable" className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Patient</th>
              <th className="px-4 py-2">Created At</th>
              <th className="px-4 py-2">Gender</th>
              <th className="px-4 py-2">Age</th>
              <th className="px-4 py-2">Contact</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {patients.map((patient, index) => (
              <tr key={index} className="bg-gray-50">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2 flex items-center">
                  <img
                    src={patient.avatar}
                    className="rounded-full w-10 h-10 object-cover mr-3"
                  />
                  {patient.name}
                </td>
                <td className="border px-4 py-2">{patient.createdAt}</td>
                <td className="border px-4 py-2">
                  <span className={`bg-${patient.gender === 'Male' ? 'green' : 'red'}-100 text-${patient.gender === 'Male' ? 'green' : 'red'}-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded`}>
                    {patient.gender}
                  </span>
                </td>
                <td className="border px-4 py-2">{patient.age}</td>
                <td className="border px-4 py-2">{patient.contact}</td>
                <td className="border px-4 py-2">
                  <select
                    value={patientPhases[patient.id] || ''}
                    onChange={(event) => handlePhaseChange(patient.id, event)}
                    className="p-2 border border-gray-300 rounded-lg"
                  >
                    <option value="">Select Phase</option>
                    {Array.from({ length: 11}, (_, i) => i + 1).map((phase) => (
                      <option key={phase} value={`Phase ${phase}`}>{`Phase ${phase}`}</option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Patient Form */}
      {showForm && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-lg font-semibold mb-4">Add New Patient</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleAddPatient(); }}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={newPatient.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Created At</label>
                <input
                  type="date"
                  name="createdAt"
                  value={newPatient.createdAt}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <select
                  name="gender"
                  value={newPatient.gender}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Age</label>
                <input
                  type="number"
                  name="age"
                  value={newPatient.age}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Contact</label>
                <input
                  type="text"
                  name="contact"
                  value={newPatient.contact}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
                >
                  Add Patient
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Patient Button */}
      <button
        className="fixed bottom-10 right-10 bg-teal-600 text-white p-4 rounded-full shadow-lg hover:bg-teal-700"
        onClick={() => setShowForm(true)}
      >
        Add Patient
      </button>
    </DashboardLayout>
  );
}

export default RecipientsList;
