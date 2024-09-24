import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { IoTimeOutline } from 'react-icons/io5';
import CreateRecipinet from './CreateRecipinet';
import { ActionButtonTemplate } from '../../components/ActionButtons';

import { CustomerService } from '../../mocks/CustomerService';
import { classNames } from 'primereact/utils';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { Tag } from 'primereact/tag';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';

function RecipientsList() { 
  
  const [customers, setCustomers] = useState(null);
  const [filters, setFilters] = useState({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
      'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
      representative: { value: null, matchMode: FilterMatchMode.IN },
      status: { value: null, matchMode: FilterMatchMode.EQUALS },
      verified: { value: null, matchMode: FilterMatchMode.EQUALS }
  });
  const [loading, setLoading] = useState(true);
  const [globalFilterValue, setGlobalFilterValue] = useState('');

  const [addRecipient, setAddRecipient] = useState(false);
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
    {
      id: 3,
      name: 'Mauris Auctor',
      createdAt: '22 Nov 2023',
      gender: 'Female',
      age: 34,
      contact: '+1 456 789 123',
      avatar: 'https://i.pravatar.cc/41',
    },
    {
      id: 4,
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

  useEffect(() => {
    CustomerService.getCustomersMedium().then((data) => {
        setCustomers(getCustomers(data));
        setLoading(false);
    });
}, []); // eslint-disable-line react-hooks/exhaustive-deps

const getCustomers = (data) => {
    return [...(data || [])].map((d) => {
        d.date = new Date(d.date);

        return d;
    });
};

const onGlobalFilterChange = (e) => {
  const value = e.target.value;
  let _filters = { ...filters };

  _filters['global'].value = value;

  setFilters(_filters);
  setGlobalFilterValue(value);
};

const renderHeader = () => {
  return (
      <div className="flex justify-content-end">
          <IconField iconPosition="left">
              <InputIcon className="pi pi-search" />
              <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
          </IconField>
      </div>
  );
};

const countryBodyTemplate = (rowData) => {
  return (
      <div className="flex align-items-center gap-2">
          <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`flag flag-${rowData.country.code}`} style={{ width: '24px' }} />
          <span>{rowData.country.name}</span>
      </div>
  );
};
const header = renderHeader();

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
      <div className="container mx-auto p-6 bg-red-white+ shadow-lg rounded-lg mt-10">
        
      <div className="card">
            <DataTable value={customers} paginator rows={5} dataKey="id" filters={filters} filterDisplay="row" loading={loading} stripedRows
                    globalFilterFields={['name', 'country.name', 'representative.name', 'status']} header={header} emptyMessage="No customers found.">
                <Column field="name" header="Name" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
                <Column header="Country" filterField="country.name" style={{ minWidth: '12rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by country" />
                <Column header="Actions" body={ActionButtonTemplate} style={{width: "25%"}}/>
                
            </DataTable>
        </div>

        {/* Patients Table */}
        {/* <table id="patientTable" className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Patient</th>
              <th className="px-4 py-2">date</th>
              <th className="px-4 py-2">Gender</th>
              <th className="px-4 py-2">parent</th>

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
                    {Array.from({ length: 11 }, (_, i) => i + 1).map((phase) => (
                      <option key={phase} value={`Phase ${phase}`}>{`Phase ${phase}`}</option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>


      {/* Add Patient Form */}
     <CreateRecipinet open={addRecipient} onClose={() => {setAddRecipient(false)}}/>

      {/* Add Patient Button */}
      <button
        className="fixed bottom-10 right-10 bg-teal-600 text-white p-4 rounded-full shadow-lg hover:bg-teal-700"
        onClick={() =>  {setAddRecipient(true)}}
      >
        Add Patient
      </button>
    </DashboardLayout>
  );
}

export default RecipientsList;
