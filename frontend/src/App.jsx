
import './App.css'
<<<<<<< HEAD
import Login from './components/login'
import AdminDashboard from './pages/adminpage';
import EditProfile from './pages/editProfile';
import SoldierPage from './pages/Soldirerpage'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
=======
import Login from './pages/Login/Login.jsx';

import AdminDashboard from './pages/Admin/adminpage.jsx';
import EditProfile from './pages/editProfile';
import SoldierPage from './pages/Soldirerpage'
import DoctorInfo from './pages/Doctor info/doctorpage.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfileSettings from './pages/Profile Setting/profileSettings.jsx';
>>>>>>> main

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        {/* Route for the Login page */}
<<<<<<< HEAD
        <Route path="/" element={<Login />} />
=======
    
        {/* <Route path="/Login" element={<Login3/>} />  */}
        <Route path="/" element={<Login/>} /> 
      
        

>>>>>>> main
        
        {/* Route for the Soldier Page */}
        <Route path="/soldier" element={<SoldierPage />} />
        
        {/* Add more routes as needed */}
        <Route path="/edit-profile" element={<EditProfile/>} />
<<<<<<< HEAD
        <Route path="/admin-dashbord" element={<AdminDashboard/>} />
=======
        <Route path="/admin-dashboard" element={<AdminDashboard/>} />
        <Route path="/doctor-info" element={<DoctorInfo/>} />
        <Route path="/profile-settings" element={<ProfileSettings/>} />
     
>>>>>>> main
        
      </Routes>
    </Router>
    </>
  )
}

export default App
