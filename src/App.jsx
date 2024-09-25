import { useState } from 'react'
import './App.css'
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import Dashboard from './pages/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PrimeReactProvider } from 'primereact/api'
import RecipientsList from './pages/recipient/RecipientsList';
import Healthcares from './pages/healthcare/Healthcares';
import SignIn from './pages/parents/auth/SignIn';
import Otp from './pages/parents/auth/Otp'
import ParentLayout from './layouts/ParentLayout';
import History from './pages/parents/vaccination/History'

function App() {

  return (
    <>
    <PrimeReactProvider>
      <Router>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/recipients' element={<RecipientsList/>}/>
            <Route path='/doctor' element={<Healthcares/>}/>
            <Route path='/vaccine' element={<ParentLayout/>}>
              <Route path='signin' element={<SignIn/>}/>
              <Route path='otp' element={<Otp/>}/>
              <Route path='history' element={<History/>}/>
            </Route>
        </Routes>
      </Router>
      </PrimeReactProvider>
    </>
  )
}

export default App
