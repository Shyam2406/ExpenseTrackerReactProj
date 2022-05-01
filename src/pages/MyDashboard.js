import React from 'react'
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Doughnut } from 'react-chartjs-2'
/* import { Grid, Typography } from "@material-ui/core";
import Chart from "react-apexcharts"; */
/* import { Chart, ArcElement } from 'chart.js';
import { Chart as ReactChart } from 'react-chartjs-2'; */

/* Chart.register(ArcElement) */


const MyDashboard = () => {

  

  /* const options = {
    series: [2,3,4],
    labels: ["Expense", "Income", "Personal Bill"],

    plotOptions: {}
  }
  
  const graphdata = [
    {name : "Income" , value: 1000},
    {name : "Expense" , value: 100},
  ]; */


 /*  const graphdata = {
    labels : [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label:'My data',
      data:[300,20,80],
      backgroundColor:[
        'rgb(255,99,132)',
        'rgb(54,162,235)',
        'rgb(255,205,86)',

      ],
      hoverOffset:4
      

    }]
  }; */

 

  var userid ;
  const getlocalStorageData = async () => {
    var id = localStorage.getItem("userId")
    userid = id;
    alert(userid)

  }

  var navigate = useNavigate();
  const [data, setdata] = useState('')
  const [dataincome, setdataincome] = useState('')
  const [databill, setdatabill] = useState('')
  const [databillcount, setdatabillcount] = useState('')

 

  let save = dataincome - data;
  console.log("My Saving is",save);
  
  
  


  const getExpenseData = () => {
    axios.get(`http://localhost:5000/expensesbyuser/${userid}`).then((res) => {
      console.log(res.data.data);
      setdata(res.data.data);
    });
  };


  const getIncomeData = () => {
    axios.get(`http://localhost:5000/incomesbyuser/${userid}`).then((res) => {
      console.log(res.data.dataincome);
      setdataincome(res.data.dataincome);
    });
  };

  const getBillData = () => {
    axios.get(`http://localhost:5000/billsbyuser/${userid}`).then((res) => {
      console.log(res.data.databill);
      setdatabill(res.data.databill);
    });
  };

// Count number of bill like 1 , 2 
  const getCountBillData = () => {
    axios.get(`http://localhost:5000/billsCountTotal/${userid}`).then((res) => {
      console.log(res.data.databillcount);
      setdatabillcount(res.data.databillcount);
    });
  };


  
  useEffect(() =>{

    getlocalStorageData()
    getIncomeData();
    getExpenseData();
    getBillData();
    getCountBillData();

    if(localStorage.getItem("userId")){

    }
    else{
      navigate('/')
    }

  })
  return (
    <div>
      <h1 className="h3 mb-3"> Dashboard</h1>

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
                     <h5 className="card-title"><strong>Income</strong></h5>
                   </div>

                   <div className="col-auto">
                     <div className="stat text-primary">
                       <i className="align-middle" data-feather="dollar-sign"></i>
                     </div>
                   </div>
                 </div>
                 <h1 className="mt-1 mb-3">$ {dataincome}</h1>
                 <div className="mb-0">
                  {/*  <span className="text-danger"> <i className="mdi mdi-arrow-bottom-right"></i> -3.65% </span> */}
                   <span className="text-muted">Since Your Account Created</span>
                 </div>
               </div>
             </div>


         
           </div>
           <div className="col-sm-6">
             <div className="card">
               <div className="card-body">
                 <div className="row">
                   <div className="col mt-0">
                     <h5 className="card-title">Expenses</h5>
                   </div>

                   <div className="col-auto">
                     <div className="stat text-primary">
                       <i className="align-middle" data-feather="dollar-sign"></i>
                     </div>
                   </div>
                 </div>
                 <h1 className="mt-1 mb-3">$ {data}</h1>
                 <div className="mb-0">
                   {/* <span className="text-success"> <i className="mdi mdi-arrow-bottom-right"></i> 6.65% </span> */}
                   <span className="text-muted">Since Your Account Created</span>
                 </div>
               </div>
             </div>

           </div>
         </div>
       </div>
     </div>

     </div>
{/* // second part */}



<h1 className="h3 mb-3"> Saving & Personal Bill Payment</h1>

     <div className="row">
     <div>

       {/* for small size box */}
     {/* <div className="col-xl-6 col-xxl-5"> */}
       <div >
         <div className="row">
           <div className="col-sm-6">  {/* Same size row means size is 6 */}
             <div className="card">
               <div className="card-body">
                 <div className="row">
                   <div className="col mt-0"> {/* Inside Symbol  */}
                     <h5 className="card-title"><strong>Savings</strong></h5>
                   </div>

                   <div className="col-auto">
                     <div className="stat text-primary">
                       <i className="align-middle" data-feather="dollar-sign"></i>
                     </div>
                   </div>
                 </div>
                 <h1 className="mt-1 mb-3">$ {save}</h1>
                 <div className="mb-0">
                  
                   <span className="text-muted">Calculated : <span className="text-success">Income</span> -  <span className="text-danger">Expense</span></span>
                 </div>
               </div>
             </div>
         
           </div>
           <div className="col-sm-6">
             <div className="card">
               <div className="card-body">
                 <div className="row">
                   <div className="col mt-0">
                     <h5 className="card-title">Personal Bill</h5>
                   </div>

                   <div className="col-auto">
                     <div className="stat text-primary">
                       <i className="align-middle" data-feather="dollar-sign"></i>
                     </div>
                   </div>
                 </div>
                 <h1 className="mt-1 mb-3">$ {databill}</h1>
                 <div className="mb-0">
                   <Link to="/PerBill">
                   <span className="text-muted">Total Pending Bill is</span>
                   <span className="text-danger"> : {databillcount}</span>
                   </Link>
                 </div>
               </div>
             </div>

           </div>
         </div>
       </div>
     </div>

     </div>


        





    {/*  <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
					<div className="d-table-cell align-middle">

						<div className="text-center mt-4">
							<h1 className="h4">Income V/S Expense Graph</h1>
						</div>

            <Doughnut data = {graphdata}></Doughnut>


           
					
					</div>
				</div> */}






    </div>
  )
}

export default MyDashboard
