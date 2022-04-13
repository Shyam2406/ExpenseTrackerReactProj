import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {

    const [email , setemail] = useState('')
    const [password, setpassword] = useState('')

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
            alert(`Email : ${email} \n Password : ${password}`)
            }

            else {
                alert("Login again")
            }
        })

        
    }

  
      return (
          <div>
               <h1 className="h3 mb-3"> </h1>
              <form onSubmit={login}>
                  <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                          onChange={(e) => { setemail(e.target.value)}} />
                      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                          onChange={(e) => { setpassword(e.target.value) }}/>
                  </div>
  
                  <button type="submit" className="btn btn-primary">Submit</button>
                 
              </form>
  
          </div>
      )


    
};

export default Signin;
