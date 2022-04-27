import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';

const Income = () => {

  

  const [incomeList, setincomeList] = useState([])

     const [Amount, setAmount] = useState('')
     const [Date, setDate] = useState('')
     const [Description, setDescription] = useState('')
     var navigate = useNavigate();
     var [userId, setuserId] = useState('')


   
	  const getlocalStorageData = async () => {
	  var id = localStorage.getItem("userId")
	  setuserId(id)
    alert(id)
	}

  
  

  const getIncomeData = () => {
    
    axios.get(`http://localhost:5000/incomestablewise/${userId}`).then((res) =>{
      console.log(res.data.data);
      console.log(userId);
      setincomeList(res.data.data);
    })
  }
    


  /* Insert Data Api */
  const Addincome = async (e) => {
    e.preventDefault();

    var Data = {
     
      Amount: Amount,
      Description: Description,
      Date: Date,
      userId:userId

    }

   

    await axios.post(`http://localhost:5000/incomes`, Data).then((res) =>{

      console.log(res.data);
      console.log("Axios called :", res.data.data);

      if(res.data.status === 200){
      alert(`Income Added`)
      toast.success(res.data.msg);
      
      }

      else {
          alert("Add Income again")
          toast.error(res.data.msg);
      }
  })

  };

  /* Fetch Data Api */
  /* const getDatas = () => {
    axios.get(`http://localhost:5000/incomes`).then((res) => {
      console.log(res.data.data);
      setincomeList(res.data.data);
    });
  }; */

  /* const getData = () => {
    axios.get(`http://localhost:5000/incomestablewise/${userId}`).then((res) => {
      console.log(res.data.data);
      console.log(userId);
      setincomeList(res.data.data);
    });
  }; */

  


  /* Delete Data Api */
  const DeleteData = (_id) =>{
    axios.delete(`http://localhost:5000/incomes/${_id}`).then((res) => {
      alert(res.data);
      getIncomeData();
    });
  }

  useEffect(() => {
    getIncomeData()
    getlocalStorageData()
    if(localStorage.getItem("userId")){

    }
    else{
      navigate('/Dashboard/')
    }

  }, [])




  return (
    <div>
       <h1 className="h3 mb-3"> Income</h1>

          {/* Add Users Expenses */}

          <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
              <div className="d-table-cell align-middle">

                <div className="text-center mt-4">
                  <h1 className="h2">Add Income</h1>
                </div>

                <div className="card">
                  <div className="card-body">
                    <div className="m-sm-4">
                      <form onSubmit={Addincome}>
                    
                      <div className="mb-3">	
                      <label className="form-label">Income Amount</label>
                          <input type="number" name="Amount" className="form-control input-sm" placeholder="Enter Your Income (Must be Number)" onChange={(e) => setAmount(e.target.value)} required/>
                          </div>
                    
                      <div className="mb-3">
                      <label className="form-label">Income Details</label>
                          <input type="text" name="Description" className="form-control input-sm" placeholder="Enter Your Income Details" onChange={(e) => setDescription(e.target.value)} required/>
                          </div>


                          <div className="mb-3">
                      <label className="form-label">Select Date</label>
                          <input type="date" name="date" className="form-control input-sm" onChange={(e) => setDate(e.target.value)} required/>
                          </div>

                        <div className="mb-3">
                            <label className="form-label">User Id</label><br/>
                            <label className="form-label"  onChange={(e) => setuserId(e.target.value)}>{userId}</label>
                        </div>
                    
                
                        
                        <div className="text-center mt-3">
                          <input type="submit" value="Add Income"  className="btn btn-info btn-block"/>
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

              </div>
            </div>






            <hr/>



          {/* Here is display users   */}

          {/* Users Incomes Display */}

          <div className="row">
            <div>
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title text-center"><strong>User's Income Record</strong></h5>
                 
                </div>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Sr.No</th>
                      <th>Income Amount</th>
                      <th>Description</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                    incomeList.map((income,i) =>{
                      return(
                    <tr key={i}>
                      <td key={income._id}>{i+1}</td>
                      <td>{income.Amount}</td>
                      <td>{income.Description}</td>
                      
                      <td className="d-none d-md-table-cell">{income.Date}</td>
                      <td className="table-action">
                      
                      <Link to ={`/Dashboard/IncomeUpdate/${income._id}`} className="btn btn-secondary">Update</Link>
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

export default Income
