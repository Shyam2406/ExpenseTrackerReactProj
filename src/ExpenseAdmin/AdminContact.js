import React, {useEffect, useState} from 'react';
import axios from 'axios';


const AdminContact = () => {


  const [contactusList, setcontactusList] = useState([])


  const getData = () => {
    axios.get(`http://localhost:5000/contactus`).then((res) => {
      
      setcontactusList(res.data.data);
    });
  };

  const DeleteData = (_id) =>{
    axios.delete(`http://localhost:5000/contactus/${_id}`).then((res) => {
      console.log(_id);
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
              <h5 className="card-title">Total Query From Contact us</h5>
            </div>
     <table className="table table-bordered">
       <thead>
         <tr>
         <th>Sr.No</th>
         <th>User Name</th>
           <th>User Email</th>
           <th>User Problem</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>
         {
         contactusList.map((contactus,i) =>{
           return(
         <tr>
           <td key={contactus._id}>{i+1}</td>
           <td>{contactus.Name}</td>
           <td>{contactus.email}</td>
           <td>{contactus.Description}</td>
          
           <td className="table-action">
                      

             <button onClick={() => DeleteData(contactus._id)} type="button" className="btn btn-danger">Delete</button>
            
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

export default AdminContact
