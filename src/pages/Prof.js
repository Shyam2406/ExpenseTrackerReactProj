import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';

const Prof = () => {



	
	
	const getlocalStorageData = async () => {
	  var id = localStorage.getItem("userId")
	  userid = id;
	  alert(userid)
	  setuserid(userid)
	}

	var navigate = useNavigate();

	const [data, setdata] = useState('')
	const [firstName, setfirstName] = useState(data.firstName)
	const [lastName, setlastName] = useState(data.lastName)
	const [email, setemail] = useState(data.email)
	const [password, setpassword] = useState(data.password)
	const [gender, setgender] = useState(data.gender)
	var [userid, setuserid] = useState('')

    

    const getData = () => {
        axios.get(`http://localhost:5000/users/${userid}`).then((res) => {
            setdata(res.data.data);
            console.log("**", res.data.data);
        })
    }
	
	useEffect(() =>{
	  getlocalStorageData()
	  getData();
	},[])



	const update = (e) => {
        var updatedData = {
            firstName: firstName,
			lastName: lastName,
			email: email,
			gender:gender,
			userid:userid
        };
        e.preventDefault();

        axios.put(`http://localhost:5000/users/${userid}`, updatedData).then((res) => {
            if(res.data.status === 200){


                alert("Update Data")
                toast.success(res.data.msg);
                setTimeout(() => {
                    navigate('/MyDashboard')
                },2000);

                }

            else {
                alert("update Again");
				console.log(userid);

                toast.error(res.data.msg);

                setTimeout(() => {
                    navigate('/Signin')
                },5000);
            }
        });
    };
 

  return (
    <div>
      
				<div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
					<div className="d-table-cell align-middle">

						<div className="text-center mt-4">
							<h1 className="h2">Update My Profile</h1>
							
						</div>

						<div className="card">
							<div className="card-body">
								<div className="m-sm-4">
									<form onSubmit={update}>
									<div className="row">
			    				<div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group">
										
									<label className="form-label">First Name</label>
			                <input type="text" name="firstName" id="first_name" className="form-control input-sm" placeholder="Enter First Name"  defaultValue={data.firstName}  onChange={(e) => setfirstName(e.target.value)} required/>
			    					</div>
			    				</div>
			    				<div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group">
									<label className="form-label">Last Name</label>
			    						<input type="text" name="lastName" id="last_name" className="form-control input-sm" placeholder="Enter Last Name" defaultValue={data.lastName} onChange={(e) => setlastName(e.target.value)} required/>
			    					</div>
			    				</div>
			    			</div>
						
										<div className="mb-3">
											<label className="form-label">Email</label>
											<input className="form-control form-control-lg" type="email" name="email" placeholder="Enter your email" defaultValue={data.email} onChange={(e) => setemail(e.target.value)} required/>
										</div>
										<div className="mb-3">
											<label className="form-label">Password</label>
											<input className="form-control form-control-lg" type="password" name="password" placeholder="Enter password" defaultValue={data.password}   onChange={(e) => setpassword(e.target.value)} disabled/>
										</div>

												<div className="mb-3">
													<label className="form-label">Gender</label>
													<select  className="form-select"   defaultValue={data.gender}  onChange={(e) => setgender(e.target.value)}   required>
														<option>Select Gender</option>
														<option>Male</option>
														<option>Female</option>
														<option>Other</option>
													</select>
												</div>

												<div className="mb-3">
                            <label className="form-label">User Id</label><br/>
                            <label className="form-label"  onChange={(e) => setuserid(e.target.value)}>{userid}</label>
                        </div>


												
												{/* <div className="mb-3">
													<label className="form-label">Role Name</label>
													<select  className="form-select" onChange={(e) => setrole(e.target.value)} required disable>
														<option>Select Role</option>
														{
														roleList.map((role) => {
															return(
																<option value={role._id} data-select2-id="3" key = "{role._id}" >
																	{role.roleName}
																</option>
															);
														})}
														
													</select>
												</div> */}

										<div className="text-center mt-3">
											<input type="submit" value="Update Profile"  className="btn btn-info btn-block"/>
											
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

export default Prof
