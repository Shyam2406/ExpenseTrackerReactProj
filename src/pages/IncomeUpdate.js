import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';

const IncomeUpdate = () => {
    var id = useParams().incomeId;
    console.log("Id--", id);
    var navigate = useNavigate();

    const [data, setdata] = useState('')
   
    const [Amount, setAmount] = useState(data.Amount)
    const [Description, setDescription] = useState(data.Description)
    const [Date, setDate] = useState(data.Date)

    const getData = () => {
        axios.get(`http://localhost:5000/incomes/${id}`).then((res) => {
            setdata(res.data.data);
            console.log("**", res.data.data);
        })
    }

    useEffect(() => {
        getData();
    }, )

    const update = (e) => {
        var updatedData = {
            Amount: Amount,
            Description: Description,
            Date: Date
        };
        e.preventDefault();

        axios.put(`http://localhost:5000/incomes/${id}`, updatedData).then((res) => {
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
							<h1 className="h2">Update Income Details</h1>
						</div>

						<div className="card">
							<div className="card-body">
								<div className="m-sm-4">
									<form onSubmit={update}>
								
										

										<div className="mb-3">
											<label className="form-label">Income Amount</label>
											<input className="form-control form-control-lg" type="number" id="IncomeAmount" name="Amount" defaultValue={data.Amount}  onChange={(e) => setAmount(e.target.value)} required/>
										</div>


                    <div className="mb-3">
											<label className="form-label">Income Details</label>
											<input className="form-control form-control-lg" type="text" id="Description" name="Description" defaultValue={data.Description}   onChange={(e) => setDescription(e.target.value)} required/>
										</div>

                                        <div className="mb-3">
											<label className="form-label">Income Date</label>
											<input className="form-control form-control-lg" type="date" id=" Date" name="date" defaultValue={data.Date}  onChange={(e) => setDate(e.target.value)} required/>
										</div>

                                        
												

										<div className="text-center mt-3">
											<input type="submit" value="Update Income Data"  className="btn btn-info btn-block"/>
                     
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

export default IncomeUpdate
