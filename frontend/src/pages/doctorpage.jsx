import { useLocation } from "react-router-dom";

export default function DoctorPage() {
  const condition = useLocation();
//   const { soliderName = "Unknown", soliderPhone = "N/A" } = condition.state || {}; // Providing fallback values
// const { name = "Unknown", phone = "N/A" } = condition.state || {};
  return (<>
    
    <div className="w-full h-screen bg-blue-400 flex flex-col  items-center justify-center">
       <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-black">SOLDIER HEALTH EMERGENCY</h1>
       </div>
      <div className="flex space-x-8">
        {/* Soldier Name Section */}
       
        <div className="h-[200px] w-[200px] bg-gray-300  flex items-center justify-center rounded-md transition-transform duration-500 ease-in-out transform hover:scale-105 hover:bg-gray-200 hover:text-blue-800">
          <h1 className="text-xl font-bold">{condition.state?.name}</h1>
        </div>
        {/* {condition.state?.name} */}
        {/* Soldier Phone Section */}
        <div className="h-[200px] w-[200px] bg-gray-300  flex items-center justify-center rounded-md transition-transform duration-500 ease-in-out transform hover:scale-105 hover:bg-gray-200 hover:text-blue-800">
          <h1 className="text-xl font-bold">{condition.state?.phone}</h1>
        </div>
      </div>
      <div className="text-center">
            <h3  className="text-lg text-black mt-[50px]">{condition.state?.name} is in emergency. please contact him/her with {condition.state?.phone}</h3>
      </div>
    </div>
    </>
  );
}
