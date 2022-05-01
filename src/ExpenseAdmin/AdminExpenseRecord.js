import React, {useEffect, useState} from 'react';
import axios from 'axios';

const AdminExpenseRecord = () => {

    const [expenseList, setexpenseList] = useState([])


    const getData = () => {
      axios.get(`http://localhost:5000/expenses`).then((res) => {
        
        setexpenseList(res.data.data);
      });
    };

    const DeleteData = (_id) =>{
        axios.delete(`http://localhost:5000/expenses/${_id}`).then((res) => {
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
              <h5 className="card-title">All Expense Records of All Users</h5>
            </div>
     <table className="table table-bordered">
       <thead>
         <tr>
         <th>Sr.No</th>
           <th>User Id</th>
           <th>User Expense Name</th>
           <th>User Expense Amount</th>
           <th>User Transaction Type</th>
           <th>Date</th>
           <th>Action</th>
          
         </tr>
       </thead>
       <tbody>
         {
         expenseList.map((expense,i) =>{
           return(
         <tr>
           <td key={expense._id}>{i+1}</td>
           <td>{expense.user}</td>
           <td>{expense.ExpenseName}</td>
           <td>{expense.ExpenseAmount}</td>
           <td>{expense.PaymentMethod}</td>
           <td>{expense.Date}</td>
           <td className="table-action">
                      

                      <button onClick={() => DeleteData(expense._id)} type="button" className="btn btn-danger">Delete</button>
                     
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

export default AdminExpenseRecord
