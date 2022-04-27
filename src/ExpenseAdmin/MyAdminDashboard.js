import React from 'react';
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

const MyAdminDashboard = () => {


  const [Totaluser, setTotaluser] = useState('')
  const [TotalQuery, setTotalQuery] = useState('')

  const getUserData = () => {
    axios.get(`http://localhost:5000/usertotal`).then((res) => {
      console.log(res.data.data);
      setTotaluser(res.data.data);
    });
  };

  const getQuerydata = () => {
    axios.get(`http://localhost:5000/TotalQueryMessage`).then((res) => {
      console.log(res.data.data);
      setTotalQuery(res.data.data);
    });
  };

  useEffect(() =>{

    getUserData();
    getQuerydata();
  })




  return (
    <div>

<div className="row">
     <div>

       {/* for small size box */}
     {/* <div className="col-xl-6 col-xxl-5 d-flex"> */}
       <div >
         <div className="row">
           <div className="col-sm-6">
             <div className="card">
               <div className="card-body">
                 <div className="row">
                   <div className="col mt-0">
                     <h5 className="card-title"><strong>Users</strong></h5>
                   </div>

                   <div className="col-auto">
                     <div className="stat text-primary">
                       <i className="align-middle" data-feather="users"></i>
                     </div>
                   </div>
                 </div>
                 <h1 className="mt-1 mb-3">Total Users: {Totaluser} </h1>
                 <div className="mb-0">
                  {/*  <span className="text-danger"> <i className="mdi mdi-arrow-bottom-right"></i> -3.65% </span> */}
                   {/* <span className="text-muted">Since Your Account Created</span> */}
                 </div>
               </div>
             </div>


         
           </div>
           <div className="col-sm-6">
             <div className="card">
               <div className="card-body">
                 <div className="row">
                   <div className="col mt-0">
                     <h5 className="card-title">Contact Us Query</h5>
                   </div>

                   <div className="col-auto">
                     <div className="stat text-primary">
                       <i className="align-middle" data-feather="message-circle"></i>
                     </div>
                   </div>
                 </div>
                 <h1 className="mt-1 mb-3">Total Message from ContactUs: {TotalQuery}</h1>
                 <div className="mb-0">
                   {/* <span className="text-success"> <i className="mdi mdi-arrow-bottom-right"></i> 6.65% </span> */}
                   {/* <span className="text-muted">Since Your Account Created</span> */}
                 </div>
               </div>
             </div>

           </div>
         </div>
       </div>
     </div>

     </div>
      
    </div>
  )
}

export default MyAdminDashboard
