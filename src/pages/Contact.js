import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Contact = () => {

  const [Name, setName] = useState('')
  const [email, setemail] = useState('')
  const [Description, setDescription] = useState('')

  var Data = {
    Name: Name,
    email: email,
    Description: Description
  }

  const sendmessage = (e) => {
    e.preventDefault()

    axios.post(`http://localhost:5000/contactus`,Data).then(res => {
			console.log(res.data);
            console.log("Axios called :", res.data.data);

            if(res.data.status === 200){
			    	alert(`Name : ${Name} \n Email : ${email}`)
            toast.success(res.data.msg);

            }

            else {
                alert("Message Send again.....")

                toast.error(res.data.msg);
            }
		})

  }



  return (
    <div>
       <h1 className="text-center h3 mb-3"> Contact Us</h1>
       <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
					<div className="d-table-cell align-middle">

						
                    <form onSubmit={ sendmessage }>
                    <div className="form-group row">
                  <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="Name" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} required/>
                  </div>
                </div>
                <br/>
                <div className="form-group row">
                  <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                  <div className="col-sm-10">
                    <input type="email" className="form-control" id="email" placeholder="Enter Email" onChange={(e) => setemail(e.target.value)} required/>
                  </div>
                </div>
                <br/>
                <div className="form-group row">
                  <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Message</label>
                  <div className="col-sm-10">
                    <input type="textarea" className="form-control" id="Description" placeholder="Enter Message" onChange={(e) => setDescription(e.target.value)} required/>
                  </div>
                </div>
              <br/>
                
                <div className="form-group row">
                  <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary">Send Message</button>
                  </div>
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
  )
}

export default Contact
