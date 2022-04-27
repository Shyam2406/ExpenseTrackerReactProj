import React, {useEffect, useState} from 'react';
import axios from 'axios';

const AdminContact = () => {


 /*  const [contactList, setcontactList] = useState([])


  const getData = () => {
    axios.get(`http://localhost:5000/contactus`).then((res) => {
      console.log(res.data.data);
      setcontactList(res.data.data);
    });
  };

  const DeleteData = (_id) =>{
    axios.delete(`http://localhost:5000/contactus/${_id}`).then((res) => {
      getData();
    });
  }

  useEffect(() => {
    getData();
    
  })






  return (
    <div>


<h1 className="h3 mb-3"> Contact Us Message From Users</h1>


<div className="row">
 <div>
   <div className="card">
    
     <table className="table table-bordered">
       <thead>
         <tr>
         <th>Sr.No</th>
           <th>User Name</th>
           <th>Email</th>
           <th>Message</th>
           <th>Action</th>
         </tr>
       </thead>
       {
         contactList.map((contact,i) =>{
           return(
         <tr>
           <td key={contact._id}>{i+1}</td>
           <td>{contact.Name}</td>
           <td>{contact.email}</td>
           <td>{contact.Description}</td>
           <td className="table-action">
          
             <button onClick={() => DeleteData(contact._id)} type="button" className="btn btn-danger">Delete</button>
            
          </td>
           
           
         </tr>
           );
         })
         }
     </table>
     
         
   </div>
 </div>
</div>

      



    </div> 
    )*/
  
}

export default AdminContact
