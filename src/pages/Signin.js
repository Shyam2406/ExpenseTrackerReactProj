import axios from "axios";
import React, { useState,  useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {

    const [email , setemail] = useState('')
    const [password, setpassword] = useState('')
    var navigate = useNavigate();

  /*   const userEmailHandler = (e) => {
        setemail(e.target.value)
    }

    const userPasswordHandler = (e) => {
        setpassword(e.target.value)
    } */

    const login = async (e) => {
        e.preventDefault();

        var data = {
            email:email,
            password:password
        }

        await axios.post(`http://localhost:5000/login`, data).then((res) =>{

            console.log(res.data);
            console.log("Axios called :", res.data.data);

            if(res.data.status === 200){

                localStorage.setItem("userId",res.data.data._id)
                localStorage.setItem("email",res.data.data.email)
                
                console.log("email", res.data.data.email)
                console.log("user", res.data.data._id)

                alert(`Email : ${email} \n Password : ${password}`)
                toast.success(res.data.msg);
                setTimeout(() => {
                    navigate('/Dashboard/MyDashboard')
                },2000);

                }

            else {
                alert("Login again")

                toast.error(res.data.msg);

                setTimeout(() => {
                    navigate('/Dashboard/')
                },5000);
            }
        })

        
    }

    var userid ;
    const getlocalStorageData = async () => {
      var id = localStorage.getItem("userId")
      userid = id;
      
  
    }

    useEffect(() =>{
		
		getlocalStorageData()
		
		if(localStorage.getItem("userId")){
			navigate('/Dashboard/MyDashboard')
	
		}
		else{
		  navigate('/Dashboard/Signin')
		}
	}, [])

  
      return (
          <div>
              <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
					<div className="d-table-cell align-middle">

						<div className="text-center mt-4">
							<h1 className="h2">Login My Account</h1>
						</div>

						<div className="card">
							<div className="card-body">
								<div className="m-sm-4">
									<form onSubmit={login}>
								
						
										<div className="mb-3">
											<label className="form-label">Email Address</label>
											<input className="form-control form-control-lg" type="email" name="email" placeholder="Enter your email" onChange={(e) => { setemail(e.target.value)}} required/>
                                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                        </div>
										<div className="mb-3">
											<label className="form-label">Password</label>
											<input className="form-control form-control-lg" type="password" name="password" placeholder="Enter password"  onChange={(e) => { setpassword(e.target.value) }}/>
										</div>

												

										<div className="text-center mt-3">
											<input type="submit" value="Login"  className="btn btn-info btn-block"/>
											
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


    
};

export default Signin;
