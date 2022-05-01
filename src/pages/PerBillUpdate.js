import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';

const PerBillUpdate = () => {

    var id = useParams().billId;
    
    var navigate = useNavigate();

    const [data, setdata] = useState('')
    const [billName, setbillName] = useState(data.billName)
    const [billAmount, setbillAmount] = useState(data.billAmount)
    const [billCategoryName, setbillCategoryName] = useState(data.billCategoryName)
    const [billDueDate, setbillDueDate] = useState(data.billDueDate)

    const getData = () => {
        axios.get(`http://localhost:5000/bills/${id}`).then((res) => {
            setdata(res.data.data);
            
        })
    }

    useEffect(() => {
        getData();
    }, )

    const update = (e) => {
        var updatedData = {
           billName: billName,
           billAmount: billAmount,
           billCategoryName: billCategoryName,
           billDueDate: billDueDate
        };
        e.preventDefault();

        axios.put(`http://localhost:5000/bills/${id}`, updatedData).then((res) => {
            if(res.data.status === 200){


                alert("Updated Data")
                toast.success(res.data.msg);
                setTimeout(() => {
                    navigate('/MyDashboard')
                },2000);

                }

            else {
                alert("update Again")

                toast.error(res.data.msg);

                setTimeout(() => {
                    navigate('/PerBillUpdate')
                },5000);
            }
        });
    };

    
  return (
    <div>
      <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
					<div className="d-table-cell align-middle">

						<div className="text-center mt-4">
							<h1 className="h2">Update Personal Bill Details</h1>
						</div>

						<div className="card">
							<div className="card-body">
								<div className="m-sm-4">
									<form onSubmit={update}>
								
										<div className="mb-3">
											<label className="form-label">Bill Name</label>
											<input className="form-control form-control-lg" type="text" id="bill_Name" name="BillName"  defaultValue={data.billName} onChange={(e) => setbillName(e.target.value)} required />
                                            
                    </div>

										<div className="mb-3">
											<label className="form-label">Bill Amount</label>
											<input className="form-control form-control-lg" type="number" id="bill_amount" name="BillAmount" defaultValue={data.billAmount}  onChange={(e) => setbillAmount(e.target.value)} required/>
										</div>


                    <div className="mb-3">
											<label className="form-label">Bill Category</label>
											<input className="form-control form-control-lg" type="text" id=" ExpenseDetails" name="BillCategory" defaultValue={data.billCategoryName}   onChange={(e) => setbillCategoryName(e.target.value)} required/>
										</div>

                                        <div className="mb-3">
											<label className="form-label">Bill Due Date</label>
											<input className="form-control form-control-lg" type="date" id=" Date" name="date" defaultValue={data.billDueDate}  onChange={(e) => setbillDueDate(e.target.value)} required/>
										</div>
												

										<div className="text-center mt-3">
											<input type="submit" value="Update Bill Data"  className="btn btn-info btn-block"/>
                     
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

export default PerBillUpdate
