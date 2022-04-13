import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Expenses from "../pages/Expenses";
import PerBill from "../pages/PerBill";
import Signin from "../components/Signin";
import MyDashboard from "../pages/MyDashboard";
import Report from "../pages/Report";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Prof from "../pages/Prof";
import SignUp from "../pages/SignUp";
import LogOut from "../pages/LogOut";




export const Dashboard = () => {
  return (
    <div className="wrapper">
      <Sidebar />

      <div className="main">
        <Navbar />
        <main className="content">
          <div className="container-fluid p-0">

           <Routes>
             <Route path='/' element={<MyDashboard/>}></Route>
			 <Route path= '/Report' element={<Report/>}></Route>
			 <Route path="/Expenses" element={<Expenses/>}></Route>
			 <Route path="/PerBill" element={<PerBill/>}></Route>
			 <Route path="/About" element={<About/>}></Route>
			 <Route path="/Contact" element={<Contact/>}></Route>

			 {/* User account */}

			 <Route path="/Prof" element={<Prof/>}></Route>
			 <Route path="/SignUp" element={<SignUp/>}></Route>
			 <Route path="/Signin" element={<Signin/>}></Route>
			 <Route path="/LogOut" element={<LogOut/>}></Route>
           </Routes>


          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};
