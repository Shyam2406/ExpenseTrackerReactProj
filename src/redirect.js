import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import AdminDashboard from './ExpenseAdmin/AdminDashboard';

const redirect = () => {
  return (
    <div>
       <Routes>

{/* <Route path="*" element={<Dashboard />}></Route> */}



   <Route path="/Dashboard/*" element={<Dashboard />}></Route> 
   <Route path="/AdminDashboard/*" element={<AdminDashboard />}></Route>
</Routes>
    </div>
  )
}

export default redirect
