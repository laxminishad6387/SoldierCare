import React from "react";
import { Link } from "react-router-dom"; // For navigation


const SoldierPage = () => {
  // Example soldier info and fitness data
  const soldier = {
    name: "John Doe",
    unit: "Alpha Squad",
    lastCheckup: "October 15, 2024",
    fitnessScore: "85/100",
    fitnessHistory: [
      { date: "March 2024", score: "80/100" },
      { date: "June 2024", score: "75/100" },
      { date: "September 2024", score: "90/100" },
    ],
    diseases: [
      { name: "Asthma", diagnosedDate: "2018", currentStatus: "Stable" },
      { name: "Hypertension", diagnosedDate: "2020", currentStatus: "Under Treatment" },
    ],
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="p-6 bg-[#1FA9B1] shadow-lg">
        <div className="flex items-center justify-between mx-auto max-w-7xl">
          {/* Army Logo */}
          <div className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Army_logo.svg" // Replace with your army logo
              alt="Army Logo"
              className="h-14"
            />
          </div>

          {/* Edit Profile Link */}
          <div>
            <Link
              to="/edit-profile"
              className="px-4 py-2 text-lg font-medium text-white transition-all duration-300 rounded-lg hover:bg-white hover:text-blue-800"
            >
              Edit Profile
            </Link>
          </div>
        </div>
      </nav>

      {/* Content Section */}
      <div className="flex-1 p-10 mx-4 mt-6 mb-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center text-[#2b1f11] mb-8">Soldier Profile</h2>

        {/* Combined Personal and Fitness Information Section */}
        <div className="p-8 mb-8 bg-white border border-gray-300 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-[#2b1f11] mb-6">Personal and Fitness Information</h3>

          {/* Personal Information */}
          <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
            <div className="flex flex-col">
              <label className="font-medium text-gray-700">Name</label>
              <div className="p-4 text-gray-900 bg-gray-200 rounded-md">{soldier.name}</div>
            </div>
            <div className="flex flex-col">
              <label className="font-medium text-gray-700">Unit</label>
              <div className="p-4 text-gray-900 bg-gray-200 rounded-md">{soldier.unit}</div>
            </div>
          </div>

          {/* Fitness Information */}
          <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
            <div className="flex flex-col">
              <label className="font-medium text-gray-700">Last Checkup</label>
              <div className="p-4 text-gray-900 bg-gray-200 rounded-md">{soldier.lastCheckup}</div>
            </div>
            <div className="flex flex-col">
              <label className="font-medium text-gray-700">Fitness Score</label>
              <div className="p-4 text-gray-900 bg-gray-200 rounded-md">{soldier.fitnessScore}</div>
            </div>
          </div>

          {/* Fitness History */}
          <div className="mb-6">
            <label className="mb-2 font-medium text-gray-700">Fitness History</label>
            <ul className="space-y-4">
              {soldier.fitnessHistory.map((record, index) => (
                <li key={index} className="p-4 text-gray-900 bg-gray-100 rounded-md">
                  <span className="font-semibold">{record.date}: </span>
                  {record.score}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disease Information Section with Card Style */}
        <div className="p-8 bg-white border border-gray-300 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-[#2b1f11] mb-6">Disease Information</h3>

          {soldier.diseases.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {soldier.diseases.map((disease, index) => (
                <div key={index} className="p-6 transition-all duration-300 bg-gray-200 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl">
                  <h4 className="text-xl font-semibold text-[#2b1f11] mb-4">{disease.name}</h4>
                  <p className="mb-2 text-gray-700"><strong>Diagnosed Date:</strong> {disease.diagnosedDate}</p>
                  <p className="text-gray-700"><strong>Current Status:</strong> {disease.currentStatus}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-700">No diseases recorded for this soldier.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SoldierPage;
