import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
  const [email, setemail] = useState('')
      const [password, setpassword] = useState('')
      
      const login = async (e) => {
  
          e.preventDefault();
          //api -- > response --> localstorage..
          
              var data = {
                  email: email,
                  password: password
              }
          
          await axios.post('http://localhost:5000/login', data).then((res) => {
  
              console.log(res.status)
              if (res.data.status == 200 ) {
  
                  localStorage.setItem('email', res.data.data.email)
                  localStorage.setItem('firstName', res.data.data.firstName)
                  localStorage.setItem('role', res.data.data.role.roleName)
                  toast(res.msg)
                 
              }
              
              else {
                  console.log("here.....")
                 
                  toast(res.data.msg)
              }
  
          })
  
      }
  
      return (
          <div>
              <form onSubmit={login}>
                  <div class="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                          onChange={(e) => { setemail(e.target.value) }}
                      />
                      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                          onChange={(e) => { setpassword(e.target.value) }}
                      />
                  </div>
  
                  <button type="submit" class="btn btn-primary">Submit</button>
                  <ToastContainer
                      position="top-right"
                      autoClose={1800}
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
      )


    
};

export default Signin;
