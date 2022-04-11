import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MyDashboard from "../pages/MyDashboard";
import Signin from "../components/Signin";



export const Dashboard = () => {
  return (
    <div className="wrapper">
      <Sidebar />

      <div className="main">
        <Navbar />
        <main className="content">
          <div className="container-fluid p-0">


            heloo shyam

            <Signin/>
            
           {/* <Routes>
             <Route path='/Dash' element={<MyDashboard/>}></Route>
             <Route path="/Signin" element={<Signin/>}></Route>
           </Routes> */}


          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};
