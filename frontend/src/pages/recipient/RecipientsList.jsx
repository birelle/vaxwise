import React, { useState, useEffect } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { IoTimeOutline } from "react-icons/io5";
import CreateRecipinet from "./CreateRecipient";
import { ActionButtonTemplate } from "../../components/ActionButtons";

import { CustomerService } from "../../mocks/CustomerService";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { FaSquarePlus } from "react-icons/fa6";

function RecipientsList() {
  const [customers, setCustomers] = useState(null);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    "country.name": { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS },
  });
  const [loading, setLoading] = useState(true);
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  const [addRecipient, setAddRecipient] = useState(false);
  const [sortValue, setSortValue] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [newPatient, setNewPatient] = useState({
    name: "",
    createdAt: "",
    gender: "",
    age: "",
    contact: "",
  });

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
        avatar: "https://i.pravatar.cc/42", // Placeholder avatar
      },
    ]);
    setNewPatient({
      name: "",
      createdAt: "",
      gender: "",
      age: "",
      contact: "",
    });
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

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-content-end">
        <IconField iconPosition="left">
          <InputIcon className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
            className="p-3 w-[30vw]"
          />
        </IconField>
      </div>
    );
  };

  const countryBodyTemplate = (rowData) => {
    return (
      <div className="flex align-items-center gap-2">
        <img
          alt="flag"
          src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
          className={`flag flag-${rowData.country.code}`}
          style={{ width: "24px" }}
        />
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
            <p className="text-sm text-gray-400">
              Total of 300 patients This month
            </p>
          </div>
        </div>
      </div>
      <button
        className="float-right flex mr-5 text-white w-fit h-fit p-4 rounded-full shadow-lg hover:shadow-teal-700/35 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110"
        onClick={() => {
          setAddRecipient(true);
        }}
      >
        <FaSquarePlus
            color="#047481"
            size={35}
            className=""
          />
      </button>

      {/* Patients Table with Sort By and Filter */}
      <div className="container mx-auto p-6 mt-20">
        <div className="card">
          <DataTable
            value={customers}
            paginator
            rows={5}
            dataKey="id"
            filters={filters}
            filterDisplay="row"
            loading={loading}
            stripedRows
            globalFilterFields={[
              "name",
              "country.name",
              "representative.name",
              "status",
            ]}
            header={header}
            emptyMessage="No customers found."
          >
            <Column
              field="name"
              header="Name"
              filter
              filterPlaceholder="Search by name"
              style={{ minWidth: "12rem" }}
            />
            <Column
              header="Country"
              filterField="country.name"
              style={{ minWidth: "12rem" }}
              body={countryBodyTemplate}
              filter
              filterPlaceholder="Search by country"
            />
      <Column
              header="Actions"
              body={ActionButtonTemplate}
              style={{ width: "25%" }}
            />
          </DataTable>
        </div>

       
      </div>

      {/* Add Patient Form */}
      <CreateRecipinet
        open={addRecipient}
        onClose={() => {
          setAddRecipient(false);
        }}
      />
    </DashboardLayout>
  );
}

export default RecipientsList;
