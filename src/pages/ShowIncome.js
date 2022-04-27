import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';

const ShowIncome = () => {

    var userid ;
    const getlocalStorageData = async () => {
      var id = localStorage.getItem("userId")
      userid = id;
      alert(userid)
  
    }

    var navigate = useNavigate();

    const [incomeList, setincomeList] = useState([])

    const getData = () => {
        axios.get(`http://localhost:5000/incomestablewise/${userid}`).then((res) => {
          console.log(res.data.data);
          setincomeList(res.data.data);
        });
      };
    
      /* Delete Data Api */
      const DeleteData = (_id) =>{
        axios.delete(`http://localhost:5000/incomes/${_id}`).then((res) => {
          alert(res.data);
          getData();
        });
      }


    useEffect(() =>{

        getData()

        getlocalStorageData()
    
    
        if(localStorage.getItem("userId")){
    
        }
        else{

          navigate('/Dashboard/')
        }
    
      })
  


  return (
    <div>
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

export default ShowIncome
