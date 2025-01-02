import { useState } from "react";
import jsPDF from "jspdf";
import logo from "../../assests/logo.png"; // Replace with your logo
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const [soldiers] = useState([
    {
      id: 1,
      name: "John Doe",
      rank: "Sergeant",
      health: "Needs Medical Attention",
      location: "Sector A - Barracks",
      photo: "https://img.freepik.com/free-photo/young-soldier-affected-by-ptsd-effect_23-2149235507.jpg?t=st=1735836978~exp=1735840578~hmac=4a5af82a1b24dd2f9c7be2ce604d20057cb27d9a00ad6fcd4808caa2ac691915&w=996",
      leaveDuration: "15 Days",
      issuedBy: "Major General Smith",
    },
    {
      id: 2,
      name: "John Doe",
      rank: "Sergeant",
      health: "Good",
      location: "Sector A - Barracks",
      photo: "https://img.freepik.com/free-photo/young-soldier-affected-by-ptsd-effect_23-2149235507.jpg?t=st=1735836978~exp=1735840578~hmac=4a5af82a1b24dd2f9c7be2ce604d20057cb27d9a00ad6fcd4808caa2ac691915&w=996",
      leaveDuration: "15 Days",
      issuedBy: "Major General Smith",
    },
    {
      id: 1,
      name: "John Doe",
      rank: "Sergeant",
      health: "Excellent",
      location: "Sector A - Barracks",
      photo: "https://img.freepik.com/free-photo/young-soldier-affected-by-ptsd-effect_23-2149235507.jpg?t=st=1735836978~exp=1735840578~hmac=4a5af82a1b24dd2f9c7be2ce604d20057cb27d9a00ad6fcd4808caa2ac691915&w=996",
      leaveDuration: "15 Days",
      issuedBy: "Major General Smith",
    },
    {
      id: 2,
      name: "Jane Smith",
      rank: "Lieutenant",
      health: "Healthy",
      location: "Sector B - Barracks",
      photo: "https://img.freepik.com/free-photo/young-soldier-affected-by-ptsd-effect_23-2149235507.jpg?t=st=1735836978~exp=1735840578~hmac=4a5af82a1b24dd2f9c7be2ce604d20057cb27d9a00ad6fcd4808caa2ac691915&w=996",
      leaveDuration: "10 Days",
      issuedBy: "Major General Smith",
    },
    {
      id: 3,
      name: "Michael Johnson",
      rank: "Captain",
      health: "Healthy",
      location: "Sector C - Barracks",    
      photo: "https://img.freepik.com/free-photo/young-soldier-affected-by-ptsd-effect_23-2149235507.jpg?t=st=1735836978~exp=1735840578~hmac=4a5af82a1b24dd2f9c7be2ce604d20057cb27d9a00ad6fcd4808caa2ac691915&w=996",
      leaveDuration: "7 Days",
      issuedBy: "Captain Smith",
    },{
      id: 4,
      name: "Michael Johnson",
      rank: "Captain",
      health: "Excellent",
      location: "Sector C - Barracks",
      photo: "https://img.freepik.com/free-photo/young-soldier-affected-by-ptsd-effect_23-2149235507.jpg?t=st=1735836978~exp=1735840578~hmac=4a5af82a1b24dd2f9c7be2ce604d20057cb27d9a00ad6fcd4808caa2ac691915&w=996",
      leaveDuration: "7 Days",
      issuedBy: "Captain Smith",
    },{
      id: 5,
      name: "Michael Johnson",
      rank: "Captain",  
      health: "Healthy",
      location: "Sector C - Barracks",
      photo: "https://img.freepik.com/free-photo/young-soldier-affected-by-ptsd-effect_23-2149235507.jpg?t=st=1735836978~exp=1735840578~hmac=4a5af82a1b24dd2f9c7be2ce604d20057cb27d9a00ad6fcd4808caa2ac691915&w=996",
      leaveDuration: "7 Days",
      issuedBy: "Captain Smith",
    },
    {
      id: 6,
      name: "Michael Johnson",
      rank: "Captain",  
      health: "Healthy",
      location: "Sector C - Barracks",
      photo: "https://img.freepik.com/free-photo/young-soldier-affected-by-ptsd-effect_23-2149235507.jpg?t=st=1735836978~exp=1735840578~hmac=4a5af82a1b24dd2f9c7be2ce604d20057cb27d9a00ad6fcd4808caa2ac691915&w=996",
      leaveDuration: "7 Days",
      issuedBy: "Captain Smith",
    },{
      id: 7,
      name: "Michael Johnson",
      rank: "Captain",  
      health: "Healthy",
      location: "Sector C - Barracks",
      photo: "https://img.freepik.com/free-photo/young-soldier-affected-by-ptsd-effect_23-2149235507.jpg?t=st=1735836978~exp=1735840578~hmac=4a5af82a1b24dd2f9c7be2ce604d20057cb27d9a00ad6fcd4808caa2ac691915&w=996",
      leaveDuration: "7 Days",
      issuedBy: "Captain Smith",
    }
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSoldier, setSelectedSoldier] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleViewSoldier = (soldier) => {
    setSelectedSoldier(soldier);
  };

  const filteredSoldiers = soldiers.filter(
    (soldier) =>
      soldier.name.toLowerCase().includes(searchQuery) ||
      soldier.rank.toLowerCase().includes(searchQuery) ||
      soldier.health.toLowerCase().includes(searchQuery)
  );

  const navigate = useNavigate();
  const generateCertificate = (soldier) => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("Health Leave Certificate", 105, 30, null, null, "center");
    doc.setFontSize(12);
    doc.text(`Soldier Name: ${soldier.name}`, 20, 60);
    doc.text(`Rank: ${soldier.rank}`, 20, 70);
    doc.text(`Health Status: ${soldier.health}`, 20, 80);
    doc.text(`Leave Duration: ${soldier.leaveDuration}`, 20, 90);
    doc.text(`Issued By: ${soldier.issuedBy}`, 20, 100);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 110);

    doc.text(
      "This certificate is issued for the purpose of allowing the soldier to take health leave as per the organization's health protocol.",
      20,
      120
    );
    doc.text(
      "This certificate is valid for the specified duration mentioned above.",
      20,
      130
    );

    doc.save(`${soldier.name}_Health_Leave_Certificate.pdf`);
  };

  return (
    <div className="flex flex-col min-h-screen sm:flex-row">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-full bg-[#1FA9B1] transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <a href="#" className="flex items-center mb-5">
            <img src={logo} alt="Logo" className="w-10 h-20 mr-3" />
            <span className="text-xl font-bold text-white text-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
              Admin Dashboard
            </span>
          </a>
          <ul className="space-y-2">
            <li>
              <a href="#" className="block p-2 text-white rounded-lg hover:bg-gray-100 hover:text-[#1FA9B1]">
                Dashboard
              </a>
            </li>
            <li>
              <button
                className="block w-full p-2 text-left text-white rounded-lg hover:bg-gray-100 hover:text-[#1FA9B1]"
                onClick={() => navigate("/profile-settings")}
              >
                Profile Settings
              </button>
            </li>
            <li>
              <button
                className="block w-full p-2 text-left text-white rounded-lg hover:bg-gray-100 hover:text-[#1FA9B1]"
                onClick={() => navigate("/doctor-info")}
              >
                Doctor Info
              </button>
            </li>
            <li>
              <a href="#" className="block p-2 text-white rounded-lg hover:bg-gray-100 hover:text-[#1FA9B1]">
                Contact
              </a>
            </li>
            <li>
              <button
                className="block w-full p-2 text-left text-red-500 rounded-lg hover:bg-gray-100"
                onClick={() => navigate("/")}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6 sm:ml-64">
        {/* Page Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#1FA9B1]">Soldier Health Dashboard</h1>
          <p className="text-gray-600">View and manage soldiers based on their health status</p>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search by Name, Rank, or Health Status"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full max-w-2xl px-5 py-3 border rounded-full focus:ring-2 focus:ring-[#1FA9B1] outline-none"
          />
        </div>

        {/* Soldiers List */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSoldiers.map((soldier) => (
            <div
              key={soldier.id}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl"
            >
              <h3 className="mb-2 text-xl font-bold text-green-800">{soldier.name}</h3>
              <p>
                <strong>Rank:</strong> {soldier.rank}
              </p>
              <p>
                <strong>Health:</strong>{" "}
                <span
                  className={
                    soldier.health === "Good"
                      ? "text-green-600"
                      : soldier.health === "Excellent"
                      ? "text-blue-600"
                      : "text-red-600"
                  }
                >
                  {soldier.health}
                </span>
              </p>
              <button
                onClick={() => handleViewSoldier(soldier)}
                className="mt-4 px-4 py-2 text-sm font-bold text-white bg-[#1FA9B1] rounded-lg hover:bg-[#15939a]"
              >
                View Soldier
              </button>
            </div>
          ))}
        </div>

        {/* Soldier Details Modal */}
        {selectedSoldier && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="p-6 bg-white rounded-lg shadow-lg w-96">
              <h2 className="mb-4 text-xl font-bold text-gray-800">Soldier Details</h2>
              <img
                src={selectedSoldier.photo}
                alt={`${selectedSoldier.name}'s photo`}
                className="object-cover w-32 h-32 mx-auto mb-4 rounded-full"
              />
              <p>
                <strong>Name:</strong> {selectedSoldier.name}
              </p>
              <p>
                <strong>Rank:</strong> {selectedSoldier.rank}
              </p>
              <p>
                <strong>Health Status:</strong> {selectedSoldier.health}
              </p>
              <p>
                <strong>Current Location:</strong> {selectedSoldier.location}
              </p>
              <button
                onClick={() => setSelectedSoldier(null)}
                className="px-4 py-2 mt-4 text-white bg-red-500 rounded-lg hover:bg-red-600"
              >
                Close
              </button>

              {/* Health Leave Certificate Download */}
              {selectedSoldier.health !== "Good" && (
                <div className="mt-4 text-center">
                  <button
                    onClick={() => generateCertificate(selectedSoldier)}
                    className="px-6 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
                  >
                    Download Health Leave Certificate
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* No Soldiers Found */}
        {filteredSoldiers.length === 0 && (
          <div className="text-center text-gray-600">
            <p>No soldiers found.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;




