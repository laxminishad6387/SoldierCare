import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileSettings = () => {
  const [firstname, setFirstname] = useState("John");
  const [lastname, setLastname] = useState("Doe");
  const [email, setEmail] = useState("admin@soldiercare.com");
  const [address, setAddress] = useState("123 Admin Lane");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [designation, setDesignation] = useState("System Admin");
  const [assignedBase, setAssignedBase] = useState("Central Base");
  const [employeeId, setEmployeeId] = useState("A12345");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileImage, setProfileImage] = useState(
    "https://bootdey.com/img/Content/avatar/avatar6.png"
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPassword || newPassword !== confirmPassword) {
      alert("Passwords do not match or are missing!");
      return;
    }
    alert("Profile updated successfully!");
  };

  const navigate = useNavigate();
  const goToDashboard = () => {
    navigate("/admin-dashboard");
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-100">
      <div className="w-full p-6 m-5 bg-white rounded-md shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-[#1FA9B1]">Admin Profile Settings</h2>

        {/* Profile Image Section */}
        <div className="flex items-center mb-8 space-x-6">
          <div className="w-28 h-28">
            <img
              src={profileImage}
              alt="Profile"
              className="block text-sm text-gray-900 bg-gray-700 border-2 border-[#1FA9B1] rounded-full cursor-pointer w-28 h-28 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="file"
              accept="image/*"
              className="mt-2"
              onChange={handleImageChange}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstname"
                className="block text-sm font-medium text-gray-700"
              >
                Firstname
              </label>
              <input
                type="text"
                id="firstname"
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="lastname"
                className="block text-sm font-medium text-gray-700"
              >
                Lastname
              </label>
              <input
                type="text"
                id="lastname"
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
          </div>

          {/* Email and Address */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          {/* City, State, Zip, and Country */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="zip"
                className="block text-sm font-medium text-gray-700"
              >
                Zip Code
              </label>
              <input
                type="text"
                id="zip"
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>

          {/* Designation, Assigned Base, and Employee ID */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <label
                htmlFor="designation"
                className="block text-sm font-medium text-gray-700"
              >
                Designation
              </label>
              <input
                type="text"
                id="designation"
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="assignedBase"
                className="block text-sm font-medium text-gray-700"
              >
                Assigned Base
              </label>
              <input
                type="text"
                id="assignedBase"
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                value={assignedBase}
                onChange={(e) => setAssignedBase(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="employeeId"
                className="block text-sm font-medium text-gray-700"
              >
                Employee ID
              </label>
              <input
                type="text"
                id="employeeId"
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
              />
            </div>
          </div>

          {/* Password Section */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="oldPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Old Password
              </label>
              <input
                type="password"
                id="oldPassword"
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* Submit and Go to Dashboard Button */}
          <div className="flex justify-between mt-6">
            <button
              type="submit"
              className="px-6 py-2 font-medium text-white bg-[#1FA9B1] rounded-md hover:bg-[#17a29b]"
            >
              Save Changes
            </button>
            <button
              type="button"
              className="px-6 py-2 font-medium text-white bg-gray-600 rounded-md hover:bg-gray-700"
              onClick={goToDashboard}
            >
              Go to Dashboard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;

