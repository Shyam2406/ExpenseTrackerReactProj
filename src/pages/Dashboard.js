import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MyDashboard from "../pages/MyDashboard";
import Signin from "../components/Signin";



export const Dashboard = () => {
  return (
    <div className="wrapper">
      <Sidebar />

      <div className="main">
        <Navbar />
        <main className="content">
          <div className="container-fluid p-0">


          <h1 class="h3 mb-3"> Dashboard</h1>

					<div class="row">
            <div>

              {/* for small size box */}
						{/* <div class="col-xl-6 col-xxl-5 d-flex"> */}
							<div >
								<div class="row">
									<div class="col-sm-6">
										<div class="card">
											<div class="card-body">
												<div class="row">
													<div class="col mt-0">
														<h5 class="card-title"><strong>Income</strong></h5>
													</div>

													<div class="col-auto">
														<div class="stat text-primary">
															<i class="align-middle" data-feather="dollar-sign"></i>
														</div>
													</div>
												</div>
												<h1 class="mt-1 mb-3">2.382</h1>
												<div class="mb-0">
													<span class="text-danger"> <i class="mdi mdi-arrow-bottom-right"></i> -3.65% </span>
													<span class="text-muted">Since last week</span>
												</div>
											</div>
										</div>
								
									</div>
									<div class="col-sm-6">
										<div class="card">
											<div class="card-body">
												<div class="row">
													<div class="col mt-0">
														<h5 class="card-title">Expenses</h5>
													</div>

													<div class="col-auto">
														<div class="stat text-primary">
															<i class="align-middle" data-feather="dollar-sign"></i>
														</div>
													</div>
												</div>
												<h1 class="mt-1 mb-3">$21.300</h1>
												<div class="mb-0">
													<span class="text-success"> <i class="mdi mdi-arrow-bottom-right"></i> 6.65% </span>
													<span class="text-muted">Since last week</span>
												</div>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>

            </div>
{/* // second part */}



<h1 class="h3 mb-3"> Saving & Pending Payment</h1>

            <div class="row">
            <div>

              {/* for small size box */}
						{/* <div class="col-xl-6 col-xxl-5"> */}
							<div >
								<div class="row">
									<div class="col-sm-6">  {/* Same size row means size is 6 */}
										<div class="card">
											<div class="card-body">
												<div class="row">
													<div class="col mt-0"> {/* Inside Symbol  */}
														<h5 class="card-title"><strong>Savings</strong></h5>
													</div>

													<div class="col-auto">
														<div class="stat text-primary">
															<i class="align-middle" data-feather="dollar-sign"></i>
														</div>
													</div>
												</div>
												<h1 class="mt-1 mb-3">2.382</h1>
												<div class="mb-0">
													<span class="text-danger"> <i class="mdi mdi-arrow-bottom-right"></i> -3.65% </span>
													<span class="text-muted">Since last week</span>
												</div>
											</div>
										</div>
								
									</div>
									<div class="col-sm-6">
										<div class="card">
											<div class="card-body">
												<div class="row">
													<div class="col mt-0">
														<h5 class="card-title">Pending Payment</h5>
													</div>

													<div class="col-auto">
														<div class="stat text-primary">
															<i class="align-middle" data-feather="dollar-sign"></i>
														</div>
													</div>
												</div>
												<h1 class="mt-1 mb-3">$21.300</h1>
												<div class="mb-0">
                          <a href="www.google.com">
                          <span class="text-muted">Total Pending Bill is</span>
													<span class="text-success"> <i class="mdi mdi-arrow-bottom-right"></i>: 3</span>
                          </a>
												</div>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>

            </div>


            heloo shyam

            <Signin/>
            
           {/* <Routes>
             <Route path='/Dash' element={<MyDashboard/>}></Route>
             <Route path="/Signin" element={<Signin/>}></Route>
           </Routes> */}


          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};
