import axios from "axios";
import React from 'react';
import { useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom';

const PerBill = () => {


  const [billName, setbillName] = useState('')
  const [billAmount, setbillAmount] = useState('')
  const [billCategoryName, setbillCategoryName] = useState('')
  const [billDueDate, setbillDueDate] = useState('')
  var [userId, setuserId] = useState('')
  const [billList, setbillList] = useState([])


   
  const getlocalStorageData = async () => {
  var id = localStorage.getItem("userId")
  setuserId(id)
}

  const submit = async (e) => {
    e.preventDefault();

    var data = {
        billName: billName,
        billAmount: billAmount,
        billCategoryName: billCategoryName,
        billDueDate: billDueDate,
        userId:userId
    }

    await axios.post(`http://localhost:5000/bills`, data).then((res) =>{

        console.log(res.data);
        console.log("Axios called :", res.data.data);

        if(res.data.status === 200){
        alert(`Bill Added`)
        toast.success(res.data.msg);
        

        }

        else {
            alert("Add again")

            toast.error(res.data.msg);

           
        }
    })

    
}


        const getData = () => {
          let id = localStorage.getItem("userId")
          axios.get(`http://localhost:5000/billofusertablewise/${id}`).then((res) => {
            console.log(res.data.data);
            console.log(id);
            setbillList(res.data.data);
          });
        };

  /* Delete Data Api */
  const DeleteData = (_id) =>{
    axios.delete(`http://localhost:5000/bills/${_id}`).then((res) => {
      alert(res.data);
      getData();
    });
  }



useEffect(() => {
  getData();
  
  getlocalStorageData()
 
}, [])
  

  return (
    <div>
       <h1 className="h3 mb-3"> User's Personal Bill & Reminder </h1>


       <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
					<div className="d-table-cell align-middle">

						<div className="text-center mt-4">
							<h1 className="h2">My Personal Bill</h1>
						</div>

						<div className="card">
							<div className="card-body">
								<div className="m-sm-4">
									<form onSubmit={submit}>
								
										<div className="mb-3">
											<label className="form-label">Bill Name</label>
											<input className="form-control form-control-lg" type="text" id="bill_Name" name="billName" placeholder="Enter your Bill Name" onChange={(e) => {setbillName(e.target.value)}} required />
                                            
                    </div>

										<div className="mb-3">
											<label className="form-label">Bill Amount</label>
											<input className="form-control form-control-lg" type="number" id="bill_amount" name="billAmout" placeholder="Enter Bill Amount(Must Be a number)" onChange={(e) => {setbillAmount(e.target.value)}} required/>
										</div>

                    <div className="mb-3">
											<label className="form-label">Bill Category</label>
											<input className="form-control form-control-lg" type="text" id="billCategory" name="billCategoryName" placeholder="Enter Category of Bill" onChange={(e) => {setbillCategoryName(e.target.value)}}/>
										</div>

                    <div className="mb-3">
											<label className="form-label">Bill Due Date</label>
											<input className="form-control form-control-lg" type="date" id="billDueDate" name="billDueDate" placeholder="Select Date" onChange={(e) => {setbillDueDate(e.target.value)}} required/>
										</div>

                    <div className="mb-3">
                            <label className="form-label">User Id</label><br/>
                            <label className="form-label"  onChange={(e) => setuserId(e.target.value)}>{userId}</label>
                        </div>
												

										<div className="text-center mt-3">
											<input type="submit" value="Submit Bill"  className="btn btn-info btn-block"/>
                     
										</div>

                    <ToastContainer
                                              position="top-right"
                                              autoClose={5000}
                                              hideProgressBar={false}
                                              newestOnTop={false}
                                              closeOnClick
                                              rtl={false}
                                              pauseOnFocusLoss
                                              draggable
                                              pauseOnHover
                                          />
									
									</form>
								</div>
							</div>
						</div>

					</div>
				</div>


        <div className="text-center mt-4">
							<h1 className="h2">My Personal Bill</h1>
							
						</div>

       <div className="row">
        <div>
          <div className="card">
            
            <table className="table table-bordered">
              <thead>
                <tr>
                <th>Sr.No</th>
                  <th>Bill Name</th>
                  <th>Amount</th>
                  <th>Bill Due Date</th>
                  <th>Actions</th>  
                </tr>
              </thead>
              <tbody>
              {
                billList.map ((bill,i) =>{
                  return(
                <tr key={i}>
                  <td key={bill._id}>{i+1}</td>
                  <td>{bill.billName}</td>
                  <td>{bill.billAmount}</td>
                  <td >{bill.billDueDate}</td>
                  <td className="table-action">
                  <Link to ={`/PerBillUpdate/${bill._id}`} className="btn btn-secondary">Update</Link>
                  <button onClick={() => DeleteData(bill._id)} type="button" className="btn btn-danger">Delete</button>

                  
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

export default PerBill
