import React, { useState } from 'react'
import './App.css'
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import Dashboard from './pages/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PrimeReactProvider } from 'primereact/api'
import RecipientsList from './pages/recipient/RecipientsList';
import Healthcares from './pages/healthcare/Healthcares';
import Vaccines from './pages/vaccine/VaccineList';
import Login from './pages/auth screen/Login';
import Signup from './pages/auth screen/Signup';
import Hospitals from './pages/hospital/hospitals';
import Vaccination from './pages/vaccinationphase/vaccination.phase';
function App() {

  return (
    <>
    <PrimeReactProvider>
      <Router>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/recipients' element={<RecipientsList/>}/>
            <Route path='/doctor' element={<Healthcares/>}/>
            <Route path='/vaccine.list' element={<Vaccines/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/hospital' element={<Hospitals/>}/>
            <Route path='/vaccination.phase' element={<Vaccination/>}/>
        </Routes>
      </Router>
      </PrimeReactProvider>
    </>
  )
}

export default App
