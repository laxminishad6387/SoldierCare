
import './App.css'
import Login from './pages/Login/Login.jsx';

import AdminDashboard from './pages/adminpage';
import EditProfile from './pages/editProfile';
import SoldierPage from './pages/Soldirerpage'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        {/* Route for the Login page */}
    
        {/* <Route path="/Login" element={<Login3/>} />  */}
        <Route path="/" element={<Login/>} /> 
      
        

        
        {/* Route for the Soldier Page */}
        <Route path="/soldier" element={<SoldierPage />} />
        
        {/* Add more routes as needed */}
        <Route path="/edit-profile" element={<EditProfile/>} />
        <Route path="/admin-dashboard" element={<AdminDashboard/>} />
     
        
      </Routes>
    </Router>
    </>
  )
}

export default App
