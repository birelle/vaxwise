import React, {useState, useEffect} from 'react'
import DashboardLayout from "../../layouts/DashboardLayout";
import { FaSquarePlus } from "react-icons/fa6";
import { ActionButtonTemplate } from "../../components/ActionButtons";

import { classNames } from "primereact/utils";
import { CustomerService } from "../../mocks/CustomerService";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { TriStateCheckbox } from "primereact/tristatecheckbox";
import CreateHealthcare from '../healthcare/CreateHealthcare';


function Hospitals() {

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

  const verifiedBodyTemplate = (rowData) => {
    return (
      <i
        className={classNames("pi", {
          "true-icon pi-check-circle": rowData.verified,
          "false-icon pi-times-circle": !rowData.verified,
        })}
      ></i>
    );
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

  const verifiedRowFilterTemplate = (options) => {
    return (
      <TriStateCheckbox
        value={options.value}
        onChange={(e) => options.filterApplyCallback(e.value)}
      />
    );
  };

  const header = renderHeader();
  const [addHealthcare, setAddHealthcare] = useState(false);
  return (
   
    <DashboardLayout>
      <div className="mt-4">
        <CreateHealthcare
          onClose={() => {
            setAddHealthcare(!addHealthcare);
          }}
          open={addHealthcare}
        />
        <h1 className="text-2xl font-bold p-8">hospitals</h1>
        {/* Render DoctorsList within the Healthcare */}

        <button
          onClick={() => {
            setAddHealthcare(true);
          }}
          className="mb-8 float-right flex mr-5 text-white w-fit h-fit p-4 rounded-full shadow-lg hover:shadow-teal-700/35 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110"
        >
          <FaSquarePlus
            color="#047481"
            size={35}
          />
        </button>
        <div className="card clear-right">
          <DataTable
            value={customers}
            paginator
            rows={5}
            dataKey="id"
            filters={filters}
            filterDisplay="row"
            loading={loading}
            stripedRows
            showGridlines
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
              field="id"
              header="Matricle"
              style={{ minWidth: "12rem" }}
            />
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
              field="verified"
              header="Verified"
              dataType="boolean"
              style={{ minWidth: "6rem" }}
              body={verifiedBodyTemplate}
              filter
              filterElement={verifiedRowFilterTemplate}
            />
            <Column
              header="Actions"
              body={ActionButtonTemplate}
              style={{ width: "25%" }}
            />
          </DataTable>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Hospitals