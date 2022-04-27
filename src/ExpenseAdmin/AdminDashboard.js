import React from 'react'
import MyAdminDashboard from '../ExpenseAdmin/MyAdminDashboard';
import UsersData from '../ExpenseAdmin/UsersData';
import { Route, Routes } from "react-router-dom";
import AdminSidebar from './AdminComponents/AdminSidebar';
import AdminNavbar from './AdminComponents/AdminNavbar';
import AdminContact from '../ExpenseAdmin/AdminContact';
import AdminFooter from './AdminComponents/AdminFooter';
import AdminSignin from '../ExpenseAdmin/AdminSignin';
import AdminLogout from '../ExpenseAdmin/AdminLogout';


const AdminDashboard = () => {
  return (
    <div className="wrapper">
      <AdminSidebar />

      <div className="main">
        <AdminNavbar />
        <main className="content">
          <div className="container-fluid p-0">

          <Routes>
             
             <Route path='/UsersData' element={<UsersData/>}></Route>
             <Route path='/' element={<AdminSignin/>}></Route>
             <Route path='/AdminContact' element={<AdminContact/>}></Route>
             <Route path='/MyAdminDashboard' element={<MyAdminDashboard/>}></Route>
             <Route path='/AdminLogout' element={<AdminLogout/>}></Route>
           
             </Routes>


            




          </div>
        </main>
        <AdminFooter />
      </div>
    </div>
  )
}

export default AdminDashboard
