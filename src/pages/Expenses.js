import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router';


const Expenses = () => {


  const [expenseList, setexpenseList] = useState([])
  const [ExpenseName, setExpenseName] = useState('')
  const [ExpenseAmount, setExpenseAmount] = useState('')
  const [ExpenseDetails, setExpenseDetails] = useState('')
  const [Date, setDate] = useState('')
  const [PaymentMethod, setPaymentMethod] = useState('')
  //passing with User Id
  var [userId, setuserId] = useState('')
  var navigate = useNavigate();


  const getlocalStorageData = async () => {
    var id = localStorage.getItem("userId")
    setuserId(id)
  }
  

  /* Insert Data Api */
  const Addexpense = async (e) => {
    e.preventDefault();

    var Data = {
      ExpenseName:ExpenseName,
      ExpenseAmount:ExpenseAmount,
      ExpenseDetails:ExpenseDetails,
      PaymentMethod:PaymentMethod,
      Date:Date,
      userId:userId
    }

    await axios.post(`http://localhost:5000/expenses/`, Data).then((res) =>{

      console.log(res.data);
      console.log(res.data.data);
      console.log("Axios called :", res.data.data);

      if(res.data.status === 200){
      alert(`Expense Added`)
      
      }

      else {
          alert("Add Expense again")
      }
  })

  };

  /* Fetch Data Api */
  const getData = () => {
    axios.get(`http://localhost:5000/expensestablewise/${userId}`).then((res) => {
      console.log(res.data.data);
      console.log(userId);
    
      setexpenseList(res.data.data);
    });
  };

  

  /* Delete Data Api */
  const DeleteData = (_id) =>{
    axios.delete(`http://localhost:5000/expenses/${_id}`).then((res) => {
      alert(res.data);
      getData();
    });
  }

  useEffect(() => {
    getData();
    setuserId(localStorage.getItem("userId"))
    getlocalStorageData()

    if(localStorage.getItem("userId")){

    }
    else{
      navigate('/Dashboard/')
    }

  }, [])


  





  return (
    <div>
      <h1 className="h3 mb-3"> Expenses</h1>

      {/* Add Users Expenses */}

      <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
					<div className="d-table-cell align-middle">

						<div className="text-center mt-4">
							<h1 className="h2">Add Expenses</h1>
						</div>

						<div className="card">
							<div className="card-body">
								<div className="m-sm-4">
									<form onSubmit={Addexpense}>
								
                  <div className="mb-3">	
									<label className="form-label">Expense Name</label>
			                <input type="text" name="ExpenseName" className="form-control input-sm" placeholder="Enter Your Expenses Name" onChange={(e) => setExpenseName(e.target.value)} required/>
                      </div>
			    			
                  <div className="mb-3">
									<label className="form-label">Expense Amount</label>
			    						<input type="number" name="ExpenseAmount" className="form-control input-sm" placeholder="Enter Amount (Must Be Number)" onChange={(e) => setExpenseAmount(e.target.value)} required/>
                      </div>
			    			
						
										<div className="mb-3">
											<label className="form-label">Expense Details</label>
											<input className="form-control form-control-lg" type="text" name="ExpenseDetails" placeholder="Enter your Expense Details" onChange={(e) => setExpenseDetails(e.target.value)} required/>
										</div>

                    <div className="mb-3">
                      <label className="form-label">Select Expense Date</label>
                          <input type="date" name="date" className="form-control input-sm" onChange={(e) => setDate(e.target.value)} required/>
                          </div>
										

												<div className="mb-3">
                            <label className="form-label">Payment Method</label>
                              <select  className="form-select" onChange={(e) => setPaymentMethod(e.target.value)} required>
                                <option>Select Method</option>
                                <option>Cash</option>
                                <option>Check</option>
                                <option>Online Banking</option>
                                <option>Online Upi Payment</option>
                              </select>
                        </div>

                        <div className="mb-3">
											<label className="form-label">User Id</label><br/>
                      <label className="form-label"  onChange={(e) => setuserId(e.target.value)}>{userId}</label>
										</div>

										<div className="text-center mt-3">
											<input type="submit" value="Add Expense"  className="btn btn-info btn-block"/>
										</div>
									</form>
								</div>
							</div>
						</div>

					</div>
				</div>

	




        <hr/>



      {/* Here is display users  */}

      {/* Users Expenses Display */}
      <div className="row">
        <div>
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Basic User Expenses</h5>
              <h6 className="card-subtitle text-muted"><strong>Showing Users</strong> Expenses </h6>
            </div>
            <table className="table table-bordered">
              <thead>
                <tr>
                
                  <th>Sr.No</th>
                  <th>Expense Name</th>
                  <th>Amount</th>
                  <th>Payment Type</th>
                  <th>Actions</th>
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
                  
                  <td className="d-none d-md-table-cell">{expense.PaymentMethod}</td>
                  <td className="table-action">
                  
                  <Link to ={`/Dashboard/ExpenseUpdate/${expense._id}`} className="btn btn-secondary">Update</Link>
                  <button onClick={() => DeleteData(expense._id)} type="button" className="btn btn-danger">Delete</button>

                  
                  </td>
                </tr>
                  );
                })
                }
                

              </tbody>
            </table>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Expenses
