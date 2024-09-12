// Import necessary modules and components
import React, { useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';

// Sample doctor data
const doctors = [
  {
    id: 1,
    name: "Hugo Lloris",
    createdAt: "12 May, 2021",
    phone: "+1 234 567 890",
    title: "Dr.",
    email: "hugolloris@gmail.com",
    image: "https://via.placeholder.com/50", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Mauris auctor",
    createdAt: "12 May, 2021",
    phone: "+1 456 789 123",
    title: "Dr.",
    email: "maurisauthor@gmail.com",
    image: "https://via.placeholder.com/50", // Replace with actual image URL
  },
  {
    id: 3,
    name: "Michael Owen",
    createdAt: "12 May, 2021",
    phone: "+1 890 123 456",
    title: "Dr.",
    email: "michaelowen@gmail.com",
    image: "https://via.placeholder.com/50", // Replace with actual image URL
  },
  {
    id: 4,
    name: "Amina Smith",
    createdAt: "12 May, 2021",
    phone: "+1 908 765 432",
    title: "Dr.",
    email: "aminasmith@gmail.com",
    image: "https://via.placeholder.com/50", // Replace with actual image URL
  },
];

// DoctorsList component that displays the list of doctors with search functionality
function DoctorsList() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search 'Doctors'"
          className="p-2 border border-gray-300 rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600">
          Export
        </button>
      </div>

      {/* Table displaying the list of doctors */}
      <table className="min-w-full bg-white border border-gray-300 rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-3 text-left text-gray-700">#</th>
            <th className="p-3 text-left text-gray-700">Doctor</th>
            <th className="p-3 text-left text-gray-700">Created At</th>
            <th className="p-3 text-left text-gray-700">Phone</th>
            <th className="p-3 text-left text-gray-700">Title</th>
            <th className="p-3 text-left text-gray-700">Email</th>
            <th className="p-3 text-left text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors
            .filter((doctor) =>
              doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((doctor) => (
              <tr key={doctor.id} className="border-t">
                <td className="p-3">{doctor.id}</td>
                <td className="p-3 flex items-center">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  {doctor.name}
                </td>
                <td className="p-3">{doctor.createdAt}</td>
                <td className="p-3">{doctor.phone}</td>
                <td className="p-3">{doctor.title}</td>
                <td className="p-3">{doctor.email}</td>
                <td className="p-3">
                  <button className="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300">
                    ...
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {/* Add New Doctor Button */}
      <button className="fixed bottom-10 right-10 bg-teal-600 text-white p-4 rounded-full shadow-lg hover:bg-teal-700">
        +
      </button>
    </div>
  );
}

// Main Healthcares component
function Healthcares() {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-2xl font-bold p-8">Healthcare Dashboard</h1>
        {/* Render DoctorsList within the Healthcare Dashboard */}
        <DoctorsList />
      </div>
    </DashboardLayout>
  );
}

export default Healthcares;
