import React, {useEffect, useState} from 'react';
import axios from 'axios';

const AdminIncomeRecord = () => {

    const [incomeList, setincomeList] = useState([])


  const getData = () => {
    axios.get(`http://localhost:5000/incomes`).then((res) => {
      
      setincomeList(res.data.data);
    });
  };

  const DeleteData = (_id) =>{
    axios.delete(`http://localhost:5000/incomes/${_id}`).then((res) => {
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
              <h5 className="card-title">All Income Records of All Users</h5>
            </div>
     <table className="table table-bordered">
       <thead>
         <tr>
         <th>Sr.No</th>
           <th>User Id</th>
           <th>User Amount</th>
           <th>Date</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>
         {
         incomeList.map((income,i) =>{
           return(
         <tr>
           <td key={income._id}>{i+1}</td>
           <td>{income.user}</td>
           <td>{income.Amount}</td>
           <td>{income.Date}</td>
           <td className="table-action">
                      <button onClick={() => DeleteData(income._id)} type="button" className="btn btn-danger">Delete</button>
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

export default AdminIncomeRecord
