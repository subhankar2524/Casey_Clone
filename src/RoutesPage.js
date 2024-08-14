import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from './App'; 
import WebForm from './WebForm';

function RoutesPage() {
  return (
    <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/form' element={<WebForm />}/>
    </Routes>
  )
}

export default RoutesPage;