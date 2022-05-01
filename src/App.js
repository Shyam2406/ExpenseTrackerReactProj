import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import AdminDashboard from './ExpenseAdmin/AdminDashboard';
/* import Button from '../src/pages/Button'; */



function App() {
  return (
    <div>
      
  
          
     
    
     <Routes>

    {/*  <Route exact path="/" element={<Dashboard />}></Route> */}



        <Route exact path="/*" element={<Dashboard />}></Route> 
        <Route exact path="/AdminDashboard/*" element={<AdminDashboard />}></Route>
        {/* <Route path="/Button" element={<Button />}></Route> */}
     </Routes>
     
    </div>
  );
}

export default App;
