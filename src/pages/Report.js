import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import { useReactToPrint} from "react-to-print";
import { useNavigate } from 'react-router';

const Report = () => {

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  var userid ;
  const getlocalStorageData = async () => {
    var id = localStorage.getItem("userId")
    userid = id;
  }
  var navigate = useNavigate();
  const [expenseList, setexpenseList] = useState([])

  /* const getData = () => {
    axios.get(`http://localhost:5000/expensestablewise/${userid}`).then((res) => {
      console.log(userid);
      console.log(res.data.data);
      setexpenseList(res.data.data);
    });
  }; */

  const getAllData = () => {
    axios.get(`http://localhost:5000/expenses`).then((res) => {
      console.log(userid);
      console.log(res.data.data);
      setexpenseList(res.data.data);
    });
  };


  useEffect(() => {
   /*  getData(); */
    getAllData();
      getlocalStorageData()
  
      if(localStorage.getItem("userId")){
  
      }
      else{
        navigate('/Dashboard/')
      }
  
   
  }, [])

  

  return (
    <div>
       <h1 className="h3 mb-3"> UserReport</h1>


       <div ref={componentRef} className="row">
        <div>
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Basic User Expenses</h5>
             {/*  <h6 className="card-subtitle text-muted"><strong>Last 7 Day's</strong> Expenses</h6> */}
            </div>
            <table className="table table-bordered">
              <thead>
                <tr>
                <th>Sr.No</th>
                  <th>Expense Name</th>
                  <th>Amount</th>
                  <th>Payment Type</th>
                 
                  
                </tr>
              </thead>
              <tbody>
              {
                expenseList.map((expense,i) =>{
                  return(
                <tr key={i}>
                  <td key={expense._id}>{i+1}</td>
                  <td>{expense.ExpenseName}</td>
                  <td>{expense.ExpenseAmount}</td>
                  
                  <td >{expense.PaymentMethod}</td>
                  
                </tr>
                  );
                })
                }
                
              </tbody>
            </table>
            
                
          </div>
        </div>
      </div>

      <div className="text-center mt-3">
				<button type="submit" value="Generate Report" onClick={handlePrint} className="btn btn-info btn-block" >Generate Report</button>
			</div>
										

    </div>
  )
}



export default Report
