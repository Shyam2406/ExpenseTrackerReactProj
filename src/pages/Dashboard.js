import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Expenses from "../pages/Expenses";
import Income from "../pages/Income";
import PerBill from "../pages/PerBill";
import Signin from "../pages/Signin";
import MyDashboard from "../pages/MyDashboard";
import Report from "../pages/Report";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Prof from "./Prof";
import SignUp from "../pages/SignUp";
import LogOut from "../pages/LogOut";
import ExpenseUpdate from "../pages/ExpenseUpdate";
import IncomeUpdate from "../pages/IncomeUpdate";
import PerBillUpdate from "../pages/PerBillUpdate";
/* import AdMainDah from '../AdminEXp/AdMainDah'; */




export const Dashboard = () => {
  return (
    <div className="wrapper">
      <Sidebar />

      <div className="main">
        <Navbar />
        <main className="content">
          <div className="container-fluid p-0">

           <Routes>
             <Route path='/MyDashboard' element={<MyDashboard/>}></Route>
            <Route path= '/Report' element={<Report/>}></Route>
            <Route path="/Expenses" element={<Expenses/>}></Route>
            <Route path="/Income" element={<Income/>}></Route>
            <Route path="/PerBill" element={<PerBill/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/ExpenseUpdate/:expenseId" element={<ExpenseUpdate/>}></Route>
            <Route path="/IncomeUpdate/:incomeId" element={<IncomeUpdate/>}></Route>
            <Route path="/PerBillUpdate/:billId" element={<PerBillUpdate/>}></Route>
            

          {/* User account */}

          <Route path="/Prof" element={<Prof/>}></Route>
          <Route path="/" element={<SignUp/>}></Route>
          <Route path="/Signin" element={<Signin/>}></Route>
          <Route path="/LogOut" element={<LogOut/>}></Route>
           </Routes>

           {/* Admin Dashboard */}
           {/* <Route path="/AdMainDah" element={<AdMainDah/>}></Route> */}


           {/* If You Add Admin Panel Then This Cose Execute



            <Routes>
             <Route path='/Dashboard/MyDashboard' element={<MyDashboard/>}></Route>
            <Route path= '/Dashboard/Report' element={<Report/>}></Route>
            <Route path="/Dashboard/Expenses" element={<Expenses/>}></Route>
            <Route path="/Dashboard/Income" element={<Income/>}></Route>
            <Route path="/Dashboard/PerBill" element={<PerBill/>}></Route>
            <Route path="/Dashboard/About" element={<About/>}></Route>
            <Route path="/Dashboard/Contact" element={<Contact/>}></Route>
            <Route path="/Dashboard/ExpenseUpdate/:expenseId" element={<ExpenseUpdate/>}></Route>
            <Route path="/Dashboard/IncomeUpdate/:incomeId" element={<IncomeUpdate/>}></Route>

         

          <Route path="/Dashboard/Prof" element={<Prof/>}></Route>
          <Route path="/Dashboard/" element={<SignUp/>}></Route>
          <Route path="/Dashboard/Signin" element={<Signin/>}></Route>
          <Route path="/Dashboard/LogOut" element={<LogOut/>}></Route>
           </Routes>
           
           
           
           */}


          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};
