import React, {useEffect, useState} from 'react';
import axios from 'axios';

const UsersData = () => {

  const [userList, setuserList] = useState([])


  const getData = () => {
    axios.get(`http://localhost:5000/users`).then((res) => {
      
      setuserList(res.data.data);
    });
  };

  const DeleteData = (_id) =>{
    axios.delete(`http://localhost:5000/users/${_id}`).then((res) => {
      alert("Data Deleted");
      getData();
    });
  }

  useEffect(() => {
    getData();
    
  })




  return (
    <div>



<div className="row">
 <div>
   <div className="card">
   <div className="card-header">
              <h5 className="card-title">Total Registered Users</h5>
            </div>
     <table className="table table-bordered">
       <thead>
         <tr>
         <th>Sr.No</th>
           <th>User FirstName</th>
           <th>User LastName</th>
           <th>User Email</th>
           
           <th>Action</th>
         </tr>
       </thead>
       <tbody>
         {
         userList.map((user,i) =>{
           return(
         <tr>
           <td key={user._id}>{i+1}</td>
           <td>{user.firstName}</td>
           <td>{user.lastName}</td>
           <td>{user.email}</td>
         
           <td className="table-action">
                      

             <button onClick={() => DeleteData(user._id)} type="button" className="btn btn-danger">Delete</button>
            
          </td>
           
           
         </tr>
           );
         })
         }
         
       </tbody>
     </table>
     
         
   </div>
 </div>
</div>





    </div>
  )
}

export default UsersData
