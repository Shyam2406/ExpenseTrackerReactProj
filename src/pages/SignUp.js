import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";

const SignUp = () => {

	var userid ;
  const getlocalStorageData = async () => {
    var id = localStorage.getItem("userId")
    userid = id;
    

  }
	
	const [roleList, setroleList] = useState([])


	const [firstName, setfirstName] = useState('')
	const [lastName, setlastName] = useState('')
	const [email, setemail] = useState('')
	const [password, setpassword] = useState('')
	const [gender, setgender] = useState('')
	const [isActive, setisActive] = useState('')
	var navigate = useNavigate();
	const [role, setrole] = useState('')

	const getData = async () => {
		await axios.get(`http://localhost:5000/roles/`).then(res => {
			console.log("Role List-----",res.data.data);
			setroleList(res.data.data);
		})
	};

	useEffect(() =>{
		getData()
		getlocalStorageData()
		
	
		if(localStorage.getItem("userId")){
			navigate('/Dashboard/MyDashboard')
	
		}
		else{
		  navigate('/Dashboard/')
		}
	}, [])

	var Data ={
		firstName: firstName,
		lastName: lastName,
		email: email,
		password: password,
		gender: gender,
		/* isActive: isActive, */
		role: role
	}

	const register = (e) => {
		e.preventDefault()

		axios.post(`http://localhost:5000/users`,Data).then(res => {
			console.log(res.data);
            console.log("Axios called :", res.data.data);

            if(res.data.status === 200){
				alert(`Email : ${email} \n Password : ${password}`)
            toast.success(res.data.msg);
            setTimeout(() => {
                navigate('/Dashboard/Signin')
            },5000);

            }

            else {
                alert("Register again.....")

                toast.error(res.data.msg);

                setTimeout(() => {
                    navigate('/Dashboard/')
                },5000);
            }
		})
	}





  return (
    <div>
       

     
				<div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
					<div className="d-table-cell align-middle">

						<div className="text-center mt-4">
							<h1 className="h2">Create Account</h1>
							<p className="lead">
								Welcome To Expense Tracker Website
							</p>
						</div>

						<div className="card">
							<div className="card-body">
								<div className="m-sm-4">
									<form onSubmit={register}>
									<div className="row">
			    				<div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group">
										
									<label className="form-label">First Name</label>
			                <input type="text" name="firstName" id="first_name" className="form-control input-sm" placeholder="Enter First Name" onChange={(e) => setfirstName(e.target.value)} required/>
			    					</div>
			    				</div>
			    				<div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group">
									<label className="form-label">Last Name</label>
			    						<input type="text" name="lastName" id="last_name" className="form-control input-sm" placeholder="Enter Last Name" onChange={(e) => setlastName(e.target.value)} required/>
			    					</div>
			    				</div>
			    			</div>
						
										<div className="mb-3">
											<label className="form-label">Email</label>
											<input className="form-control form-control-lg" type="email" name="email" placeholder="Enter your email" onChange={(e) => setemail(e.target.value)} required/>
										</div>
										<div className="mb-3">
											<label className="form-label">Password</label>
											<input className="form-control form-control-lg" type="password" name="password" placeholder="Enter password" onChange={(e) => setpassword(e.target.value)}/>
										</div>

												<div className="mb-3">
													<label className="form-label">Gender</label>
													<select  className="form-select" onChange={(e) => setgender(e.target.value)} required>
														<option>Select Gender</option>
														<option>Male</option>
														<option>Female</option>
														<option>Other</option>
													</select>
												</div>

												
												{/* <div className="mb-3">
													<label className="form-label">User Active</label>
													<input className="form-control form-control-lg" type="number" name="isActive" placeholder="Enter value O Or 1" onChange={(e) => setisActive(e.target.value)}  defaultValue="1" required/>
												</div> */}


												
												<div className="mb-3">
													<label className="form-label">Role Name</label>
													<select  className="form-select" onChange={(e) => setrole(e.target.value)} required>
														<option>Select Role</option>
														{
														roleList.map((role) => {
															return(
																<option value={role._id} data-select2-id="3" key ={role.roleName} >
																	{role.roleName}
																</option>
															);
														})}
														
													</select>
												</div>

										<div className="text-center mt-3">
											<input type="submit" value="Register"  className="btn btn-info btn-block"/>
											
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
									<br/>
									
									<div className="mb-3 text-center">
													<p className="form-label">Already Registered then
													<Link to="/Signin">Click Here</Link>
													</p>
													
									</div>

								</div>
							</div>
						</div>

					</div>
				</div>

	


    </div>
  )
}

export default SignUp
