
import './App.css'
import Login from './components/login'
import AdminDashboard from './pages/adminpage';
import DoctorPage from './pages/doctorpage';
import EditProfile from './pages/editProfile';
import Popup from './pages/popup';
import SoldierPage from './pages/Soldirerpage'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        {/* Route for the Login page */}
        <Route path="/" element={<Login />} />
        
        {/* Route for the Soldier Page */}
        <Route path="/soldier" element={<SoldierPage />} />
        
        {/* Add more routes as needed */}
        <Route path="/edit-profile" element={<EditProfile/>} />
        <Route path="/admin-dashbord" element={<AdminDashboard/>} />
        <Route path='/doctorpage' element={<DoctorPage/>}/>
        <Route path='/popUp' element={<Popup/>}/>
        
      </Routes>
    </Router>
    </>
  )
}

export default App
