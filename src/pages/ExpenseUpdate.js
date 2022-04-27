import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';

export const ExpenseUpdate = () => {
    var id = useParams().expenseId;
    console.log("Id--", id);
    var navigate = useNavigate();

    const [data, setdata] = useState('')
    const [ExpenseName, setExpenseName] = useState(data.ExpenseName)
    const [ExpenseAmount, setExpenseAmount] = useState(data.ExpenseAmount)
    const [ExpenseDetails, setExpenseDetails] = useState(data.ExpenseDetails)
    const [PaymentMethod, setPaymentMethod] = useState(data.PaymentMethod)

    const getData = () => {
        axios.get(`http://localhost:5000/expenses/${id}`).then((res) => {
            setdata(res.data.data);
            console.log("**", res.data.data);
        })
    }

    useEffect(() => {
        getData();
    }, [])

    const update = (e) => {
        var updatedData = {
            ExpenseName: ExpenseName,
            ExpenseAmount: ExpenseAmount,
            ExpenseDetails: ExpenseDetails,
            PaymentMethod: PaymentMethod
        };
        e.preventDefault();

        axios.put(`http://localhost:5000/expenses/${id}`, updatedData).then((res) => {
            if(res.data.status === 200){


                alert("Update Data")
                toast.success(res.data.msg);
                setTimeout(() => {
                    navigate('/Dashboard/MyDashboard')
                },2000);

                }

            else {
                alert("update Again")

                toast.error(res.data.msg);

                setTimeout(() => {
                    navigate('/Dashboard/ExpenseUpdate')
                },5000);
            }
        });
    };

    
    return (
        <div>
           <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
					<div className="d-table-cell align-middle">

						<div className="text-center mt-4">
							<h1 className="h2">Update Expense Details</h1>
						</div>

						<div className="card">
							<div className="card-body">
								<div className="m-sm-4">
									<form onSubmit={update}>
								
										<div className="mb-3">
											<label className="form-label">Expense Name</label>
											<input className="form-control form-control-lg" type="text" id="bill_Name" name="ExpenseName"  defaultValue={data.ExpenseName} onChange={(e) => setExpenseName(e.target.value)} required />
                                            
                    </div>

										<div className="mb-3">
											<label className="form-label">Expense Amount</label>
											<input className="form-control form-control-lg" type="number" id="bill_amount" name="ExpenseAmount" defaultValue={data.ExpenseAmount}  onChange={(e) => setExpenseAmount(e.target.value)} required/>
										</div>


                    <div className="mb-3">
											<label className="form-label">Expense Details</label>
											<input className="form-control form-control-lg" type="text" id=" ExpenseDetails" name="ExpenseDetails" defaultValue={data.ExpenseDetails}   onChange={(e) => setExpenseDetails(e.target.value)} required/>
										</div>

                                        <div className="mb-3">
											<label className="form-label">Payment Method</label>
											<select  className="form-select" defaultValue={data.PaymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                                                <option>Select Method</option>
                                                <option>Cash</option>
                                                <option>Check</option>
                                                <option>Online Banking</option>
                                                <option>Online Upi Payment</option>
                                            </select>
										</div>
												

										<div className="text-center mt-3">
											<input type="submit" value="Update Expense"  className="btn btn-info btn-block"/>
                     
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
        </div>
    )
}

export default ExpenseUpdate