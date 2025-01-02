import React, { useState } from "react";

import "./editProfile.css";
const EditProfile = () => {
  const [name, setName] = useState("John Doe");
  const [rank, setRank] = useState("Sergeant");
  const [profileImage, setProfileImage] = useState(null);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Simulated old password for validation
  const currentPassword = "exampleOldPassword"; // Replace this with actual data from the server in a real app

  // Handle password change
  const handlePasswordChange = (e) => {
    e.preventDefault();

    if (oldPassword !== currentPassword) {
      setPasswordError("Old password is incorrect!");
    } else if (newPassword !== confirmPassword) {
      setPasswordError("New passwords do not match!");
    } else {
      setPasswordError("");
      alert("Password changed successfully!");
    }
  };

  // Handle profile image change
  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file)); // Preview the selected image
    }
  };

  return (
    <div 
    id="edit-profile"
      className="flex flex-col items-center justify-center min-h-screen"

    >
      <div className="w-full max-w-xl p-10 bg-[#b4c1c1] rounded-lg shadow-lg bg-opacity-10 backdrop-blur-lg">
        <h2 className="text-3xl font-bold text-center text-[#2b1f11] mb-8">Edit Profile</h2>

        {/* Soldier Personal Information */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2 text-[#2b1f11]">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2b1f11]"
            placeholder="Enter your name"
            aria-label="Name"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2 text-[#2b1f11]">Rank</label>
          <input
            type="text"
            value={rank}
            onChange={(e) => setRank(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2b1f11]"
            placeholder="Enter your rank"
            aria-label="Rank"
          />
        </div>

        {/* Change Profile Image */}
        <div className="mb-6 text-center">
          <img
            src={profileImage || "https://www.w3schools.com/w3images/avatar2.png"} // Default avatar if no image selected
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-[#2b1f11]"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleProfileImageChange}
            className="block mx-auto text-sm cursor-pointer"
            aria-label="Change Profile Image"
          />
        </div>

        {/* Change Password */}
        <form onSubmit={handlePasswordChange}>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2 text-[#2b1f11]" htmlFor="oldPassword">
              Old Password
            </label>
            <input
              type="password"
              id="oldPassword"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2b1f11]"
              placeholder="Enter old password"
              aria-label="Old Password"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2 text-[#2b1f11]" htmlFor="newPassword">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2b1f11]"
              placeholder="Enter new password"
              aria-label="New Password"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2 text-[#2b1f11]" htmlFor="confirmPassword">
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2b1f11]"
              placeholder="Confirm new password"
              aria-label="Confirm New Password"
            />
          </div>

          {passwordError && <p className="mt-2 text-sm text-red-600">{passwordError}</p>}

          <button
            type="submit"
            className="w-full bg-[#2b1f11] hover:bg-[#3c2b19] text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#2b1f11]"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
