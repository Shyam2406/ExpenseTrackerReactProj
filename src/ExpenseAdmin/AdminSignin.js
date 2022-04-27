import React from 'react';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AdminSignin = () => {


 /*  var navigate = useNavigate();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;


  const login = async (e) => {
    e.preventDefault();

    
        if(email === "admin123@gmail.com" && password === "Admin123"){


            alert(`Email : ${email} \n Password : ${password}`)
            toast.success("Admin Login Success");
            setTimeout(() => {
                navigate('/AdminDashboard/MyAdminDashboard')
            },5000);

            }

        else {
            alert("Login again")

            toast.error("Invalid Data /n Login Again");

            setTimeout(() => {
                navigate('/AdminDashboard/')
            },5000);
        }
    

    
} */





  return (
    <div>
       <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
					<div className="d-table-cell align-middle">

						<div className="text-center mt-4">
							<h1 className="h2">Login To Admin Dashboard</h1>
						</div>

						<div className="card">
							<div className="card-body">
								<div className="m-sm-4">
									<form /* onSubmit={login} */>
								
						
										<div className="mb-3">
											<label className="form-label">Email Address</label>
											<input className="form-control form-control-lg" type="email" id ="email"name="email" placeholder="Enter your email"  required/>
                                            
                                        </div>
										<div className="mb-3">
											<label className="form-label">Password</label>
											<input className="form-control form-control-lg" type="password" id="password" name="password" placeholder="Enter password"  />
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
}

export default AdminSignin
