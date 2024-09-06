import { useState } from 'react'
import './App.css'
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import Dashboard from './pages/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PrimeReactProvider } from 'primereact/api'
import {ROUTES} from './routes';

function App() {

  return (
    <>
    <PrimeReactProvider>
      <Router>
        <Routes>
          
        {/* {[...ROUTES].map((route, index) => (
              <Route
                key={index.toString() + route?.path}
                path={route?.route}
                element={<route.element />}
                children={route?.Children?.map((child) => (
                  <Route
                    key={index.toString() + child.path}
                    path={route?.route + child?.route}
                    element={<child.element />}
                  />
                ))}
              />
            ))} */}
            <Route path='/' element={<Dashboard/>}/>
        </Routes>
      </Router>
      </PrimeReactProvider>
    </>
  )
}

export default App
