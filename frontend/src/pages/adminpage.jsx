import  { useState } from "react";

function AdminDashboard ()  {
  console.log("Admin Dashboard");
  const [soldiers] = useState([
    { id: 1, name: "John Doe", rank: "Sergeant", health: "Good" },
    { id: 2, name: "Jane Smith", rank: "Lieutenant", health: "Needs Attention" },
    { id: 3, name: "Mark Johnson", rank: "Corporal", health: "Excellent" },
    { id: 4, name: "Sarah Brown", rank: "Major", health: "Good" },
    { id: 5, name: "Tom Davis", rank: "Colonel", health: "Needs Attention" },
    { id: 6, name: "David Wilson", rank: "Captain", health: "Excellent" },
    { id: 7, name: "Emily Thompson", rank: "First Lieutenant", health: "Needs Attention" },
    { id: 8, name: "Michael Lee", rank: "Second Lieutenant", health: "Good" },
    { id: 9, name: "Daniel Williams", rank: "Third Lieutenant", health: "Excellent" },
    { id: 10, name: "Jennifer Adams", rank: "Fourth Lieutenant", health: "Needs Attention" },
    { id: 11, name: "David Johnson", rank: "Fifth Lieutenant", health: "Good" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredSoldiers = soldiers.filter(
    (soldier) =>
      soldier.name.toLowerCase().includes(searchQuery) ||
      soldier.rank.toLowerCase().includes(searchQuery) ||
      soldier.health.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="min-h-screen ">
      {/* Navbar */}
      <nav className="text-white bg-[#1FA9B1] shadow-lg">
        <div className="container flex items-center justify-between px-6 py-4 mx-auto">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <ul className="flex space-x-8 text-lg">
            <li className="cursor-pointer hover:text-yellow-400">Dashboard</li>
            <li className="cursor-pointer hover:text-yellow-400">Profile Settings</li>
            <li className="cursor-pointer hover:text-yellow-400">Doctor Info</li>
            <li className="cursor-pointer hover:text-yellow-400">Contact</li>
          </ul>
          <button className="px-5 py-2 font-semibold text-blue-300 bg-white rounded-full hover:bg-red-600">
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container px-6 py-10 mx-auto">
        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search by Name, Rank, or Health Status"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full max-w-2xl px-5 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Soldiers List */}
        <div className="flex w-full h-[100vh] bg-[#1FA9B1] shadow-2xl m "> 
        <div className="w-full px-10 py-10 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 h-[20vh] ">
          {filteredSoldiers.length > 0 ? (
            filteredSoldiers.map((soldier) => (
              <div
                key={soldier.id}
                className="p-6 transition-all transform bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105"
              >
                <h3 className="mb-3 text-2xl font-bold text-green-800">
                  {soldier.name}
                </h3>
                <p className="mb-2 text-gray-700">
                  <strong>Rank:</strong> {soldier.rank}
                </p>
                <p className="text-gray-700">
                  <strong>Health Status:</strong>{" "}
                  <span
                    className={`font-semibold ${
                      soldier.health === "Good"
                        ? "text-green-600"
                        : soldier.health === "Excellent"
                        ? "text-blue-600"
                        : "text-red-600"
                    }`}
                  >
                    {soldier.health}
                  </span>
                </p>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-700 col-span-full">
              <p>No soldiers found.</p>
            </div>
          )}
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
