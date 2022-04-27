import React from 'react'
import { useNavigate } from 'react-router';

const AdminLogout = () => {


  var navigate = useNavigate();
  
 

        setTimeout(() => {
          navigate('/')
      },3000);

  return (
    <div>
      
        <h1 className="h3 mb-3"> Logout Successfully</h1>
    </div>
  )
}

export default AdminLogout
