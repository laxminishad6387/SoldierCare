import { useState } from "react";
import logo from "../../assests/logo.png";
import doctorBg from "../../assests/bg-doctor.jpg";
import doctor1 from "../../assests/doctor1.jpg";
import doctor3 from "../../assests/doctor3.jpg";
import Chat from "./chat.jsx";

function DoctorInfo() {
  const doctors = [
    {
      id: 1,
      name: "Dr. John Doe",
      specialty: "Cardiologist",
      contact: "555-1234",
      experience: 15,
      bio: "Dr. John Doe has over 15 years of experience in treating heart conditions and is passionate about patient care.",
      profilePicture: doctor1,
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      specialty: "Dermatologist",
      contact: "555-5678",
      experience: 10,
      bio: "Dr. Jane Smith specializes in treating skin conditions and has a background in dermatology.",
      profilePicture: doctor1,
    },
    {
      id: 3,
      name: "Dr. Michael Johnson",
      specialty: "Pediatrician",
      contact: "555-9012",
      experience: 8,
      bio: "Dr. Michael Johnson is a pediatrician who specializes in treating children's health issues.",
      profilePicture: doctor3,
    },
    {
      id: 4,
      name: "Dr. John Doe",
      specialty: "Cardiologist",
      contact: "555-1234",
      experience: 15,
      bio: "Dr. John Doe has over 15 years of experience in treating heart conditions and is passionate about patient care.",
      profilePicture: doctor1,
    },
    {
      id: 5,
      name: "Dr. Jane Smith",
      specialty: "Dermatologist",
      contact: "555-5678",
      experience: 10,
      bio: "Dr. Jane Smith specializes in treating skin conditions and has a background in dermatology.",
      profilePicture: doctor1,
    },
    {
      id: 6,
      name: "Dr. Michael Johnson",
      specialty: "Pediatrician",
      contact: "555-9012",
      experience: 8,
      bio: "Dr. Michael Johnson is a pediatrician who specializes in treating children's health issues.",
      profilePicture: doctor3,
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);
   const [selectedDoctorName , setSelectedDoctorName] = useState(null);
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchQuery) ||
      doctor.specialty.toLowerCase().includes(searchQuery)
  );

  const handleConnectClick = (doctorId, doctorName) => {
    console.log("Doctor selected:", doctorId);
    setSelectedDoctorId(doctorId);
    setSelectedDoctorName(doctorName);
    console.log("Doctor selected:", doctorName);
    console.log("Doctor selected:", doctorId);
  };

  return (
    <>
      {/* Intro Section */}
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 md:gap-8">
        <div className="ml-4 md:ml-20">
          <h1 className="mt-8 mb-12 text-4xl font-extrabold text-gray-900 sm:text-5xl dark:text-white md:text-5xl lg:text-6xl">
            <span className="mx-auto text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              SoldierCare Doctors
            </span>
          </h1>
          <h6 className="mb-4 text-xl text-center md:text-left">Meet With_______</h6>
          <div
            className="flex flex-col justify-center text-center md:text-left"
            style={{
              textShadow: `0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)`,
            }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl">OUR BEST</h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#1FA9B1]">Doctors</h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#1FA9B1]">Online</h1>
          </div>
          <p className="mt-4 text-xl text-center md:text-left">
            Empowering Soldiers with Expert Medical Guidance.
          </p>
          <p className="mt-8 text-center text-gray-600 md:text-left">
            At SoldierCare, we connect our heroes with expert doctors who
            understand the unique challenges faced by soldiers. From physical
            recovery to mental health support, our compassionate medical
            professionals are here to provide personalized care. Explore doctor
            profiles and schedule consultations with ease because your health is
            our mission.
          </p>
        </div>
        <div className="w-full md:w-[90%]">
          <img src={doctorBg} alt="Doctor Background" className="w-full h-auto rounded-lg" />
        </div>
      </div>

      {/* Doctor Information Section */}
      <div className="py-12">
        <div className="flex justify-center">
          <h1 className="text-4xl text-[#1FA9B1] mb-10">Our Best Doctors</h1>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-12">
          <input
            type="text"
            placeholder="Search by Name or Specialty"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full max-w-2xl px-5 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Doctors Cards */}
        <div className="grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 md:grid-cols-3">
          {filteredDoctors.map((doctor, index) => (
            <div
              key={index}
              className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg"
            >
              <img
                src={doctor.profilePicture}
                alt={`${doctor.name}'s profile`}
                className="object-cover w-full h-[10rem] md:h-[15rem] rounded-t-lg"
              />
              <div className="p-4">
                <h1 className="text-xl font-bold sm:text-2xl">{doctor.name}</h1>
                <h2 className="text-lg text-gray-600 sm:text-xl">{doctor.specialty}</h2>
                <p className="mt-2 text-sm sm:text-base">
                  <strong>Contact:</strong> {doctor.contact}
                </p>
                <p className="text-sm sm:text-base">
                  <strong>Experience:</strong> {doctor.experience} years
                </p>
                <p className="mt-2 text-sm sm:text-base">
                  <strong>Bio:</strong> {doctor.bio}
                </p>

                {/* Connect Button */}
                <button
                  onClick={() =>{
                    console.log("Doctor selected3:", doctor.id, doctor.name);
                    handleConnectClick(doctor.id, doctor.name);
                    
                  }}
                  className="px-4 py-2 mt-4 text-white bg-[#1FA9B1] rounded-full hover:bg-[#1FA9B1] w-full"
                >
                  Connect with {doctor.name}
                </button>
              </div>
            </div>
          ))}

          {selectedDoctorId && <Chat doctorId={selectedDoctorId} selectedDoctorName={selectedDoctorName} />}

        </div>
      </div>
    </>
  );
}

export default DoctorInfo;

