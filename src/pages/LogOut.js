import React from 'react'
import { useNavigate } from 'react-router';

const LogOut = () => {

  var navigate = useNavigate();
  
  localStorage.clear()

  setTimeout(() => {
    navigate('/Dashboard/')
},3000);

  return (
    <div>
       <h1 className="h3 mb-3">Logout</h1>


       <h1 className="h3 mb-3">Logout SuccessFully.....</h1>
       

    </div>
  )
}

export default LogOut
