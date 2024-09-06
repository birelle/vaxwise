import { useState } from 'react'
import './App.css'
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import Dashboard from './pages/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PrimeReactProvider } from 'primereact/api'
import RecipientsList from './pages/recipient/RecipientsList';
import Healthcares from './pages/healthcare/Healthcares';

function App() {

  return (
    <>
    <PrimeReactProvider>
      <Router>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/recipients' element={<RecipientsList/>}/>
            <Route path='/doctor' element={<Healthcares/>}/>
        </Routes>
      </Router>
      </PrimeReactProvider>
    </>
  )
}

export default App
