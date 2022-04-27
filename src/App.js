import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import AdminDashboard from './ExpenseAdmin/AdminDashboard';



function App() {
  return (
    <div>
      
  
          
     
    
     <Routes>

     {/* <Route path="*" element={<Dashboard />}></Route> */}



        <Route path="/Dashboard/*" element={<Dashboard />}></Route> 
        <Route path="/AdminDashboard/*" element={<AdminDashboard />}></Route>
     </Routes>
     
    </div>
  );
}

export default App;
