import React, { useState } from "react";

const AdminDashboard = () => {
  const [soldiers, setSoldiers] = useState([
    { id: 1, name: "John Doe", rank: "Sergeant", health: "Good" },
    { id: 2, name: "Jane Smith", rank: "Lieutenant", health: "Needs Attention" },
    { id: 3, name: "Mark Johnson", rank: "Corporal", health: "Excellent" },
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
    <div className="min-h-screen bg-gradient-to-b from-green-200 via-green-300 to-green-500">
      {/* Navbar */}
      <nav className="bg-[#2b1f11] text-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <ul className="flex space-x-8 text-lg">
            <li className="hover:text-yellow-400 cursor-pointer">Dashboard</li>
            <li className="hover:text-yellow-400 cursor-pointer">Profile Settings</li>
            <li className="hover:text-yellow-400 cursor-pointer">Doctor Info</li>
            <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
          </ul>
          <button className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-full text-white font-semibold">
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto py-10 px-6">
        {/* Search Bar */}
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Search by Name, Rank, or Health Status"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full max-w-2xl px-5 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* Soldiers List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSoldiers.length > 0 ? (
            filteredSoldiers.map((soldier) => (
              <div
                key={soldier.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all"
              >
                <h3 className="text-2xl font-bold mb-3 text-green-800">
                  {soldier.name}
                </h3>
                <p className="text-gray-700 mb-2">
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
            <div className="col-span-full text-center text-gray-700">
              <p>No soldiers found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
