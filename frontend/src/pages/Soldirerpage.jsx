import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // For navigation
import { useEffect } from "react";

const SoldierPage = () => {
  const navigate=useNavigate();
  const [current1Status,setCurrent1Status]=useState("stable");
  // const [current2Status,setCurrent2Status]=useState("stable");
  // Example soldier info and fitness data
  const soldier = {
    name: "John Doe",
    phone:"6387408704",
    unit: "Alpha Squad",
    lastCheckup: "October 15, 2024",
    fitnessScore: "85/100",
    fitnessHistory: [
      {date:"January 2024", score:"90/100"},
      {date:"Feburay 2024", score:"75/100"},
      { date: "March 2024", score: "80/100" },
      { date: "April 2024", score: "80/100" },
      { date: "May 2024", score: "80/100" },
      { date: "June 2024", score: "75/100" },
      { date: "July 2024", score: "80/100" },
       { date: "August 2024", score: "80/100" },
      { date: "September 2024", score: "90/100" },
      { date: "October 2024", score: "80/100" },
      { date: "November 2024", score: "80/100" },
      { date: "December 2024", score: "80/100" },
    ],
    diseases: [
      { name: "Asthma", diagnosedDate: "2018", currentStatus: "Stable" },
      { name: "Hypertension", diagnosedDate: "2020", currentStatus: "Under Treatment" },
    ],
  };
  useEffect(() => {
    if (current1Status === "unstable") {
      navigate("/admin-dashbord", {
        state: { healthcondition: "unstable", name: soldier.name, phone: soldier.phone },
      });
    }
  }, [current1Status, navigate, soldier.name, soldier.phone]);

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="bg-[#2b1f11] p-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
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
              className="text-white text-lg font-medium hover:bg-[#3c2b19] px-4 py-2 rounded-lg transition-all duration-300"
            >
              Edit Profile
            </Link>
          </div>
        </div>
      </nav>

      {/* Content Section */}
      <div className="flex-1 p-10 bg-white rounded-lg shadow-lg mx-4 mt-6 mb-4">
        <h2 className="text-4xl font-bold text-center text-[#2b1f11] mb-8">Soldier Profile</h2>

        {/* Combined Personal and Fitness Information Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-300 mb-8">
          <h3 className="text-2xl font-semibold text-[#2b1f11] mb-6">Personal and Fitness Information</h3>

          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label className="font-medium text-gray-700">Name</label>
              <div className="bg-gray-200 text-gray-900 p-4 rounded-md">{soldier.name}</div>
            </div>
            <div className="flex flex-col">
              <label className="font-medium text-gray-700">Unit</label>
              <div className="bg-gray-200 text-gray-900 p-4 rounded-md">{soldier.unit}</div>
            </div>
          </div>

          {/* Fitness Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label className="font-medium text-gray-700">Last Checkup</label>
              <div className="bg-gray-200 text-gray-900 p-4 rounded-md">{soldier.lastCheckup}</div>
            </div>
            <div className="flex flex-col">
              <label className="font-medium text-gray-700">Fitness Score</label>
              <div className="bg-gray-200 text-gray-900 p-4 rounded-md">{soldier.fitnessScore}</div>
            </div>
          </div>

          {/* Fitness History */}
          <div className="mb-6">
            <label className="font-medium text-gray-700 mb-2">Fitness History</label>
            <ul className="space-y-4">
              {soldier.fitnessHistory.map((record, index) => (
                <li key={index} className="bg-gray-100 text-gray-900 p-4 rounded-md">
                  <span className="font-semibold">{record.date}: </span>
                  {record.score}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disease Information Section with Card Style */}
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-300">
          <h3 className="text-2xl font-semibold text-[#2b1f11] mb-6">Disease Information</h3>

          {soldier.diseases.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {soldier.diseases.map((disease, index) => (
                <div key={index} className="bg-gray-200 p-6 rounded-lg shadow-lg border border-gray-300 hover:shadow-xl transition-all duration-300">
                  <h4 className="text-xl font-semibold text-[#2b1f11] mb-4">{disease.name}</h4>
                  <p className="text-gray-700 mb-2"><strong>Diagnosed Date:</strong> {disease.diagnosedDate}</p>
                  <p className="text-gray-700" ><strong>Current Status:</strong> {disease.currentStatus}</p>
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
