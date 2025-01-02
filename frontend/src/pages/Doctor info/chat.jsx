import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

const Chat = ({ doctorId, selectedDoctorName }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [user, setUser] = useState(localStorage.getItem("user") || ""); // Get user from localStorage
  const [isChatOpen, setIsChatOpen] = useState(false); // To toggle chat visibility
  console.log(
    "selectedDoctorName2: ",
    selectedDoctorName,
    "doctorId2: ",
    doctorId
  );
  // Fetch previous messages from the server (assuming the server returns messages for a specific doctor)
  useEffect(() => {
    fetch(`http://localhost:5000/api/messages?doctorId=${doctorId}`)
      .then((response) => response.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error("Error fetching messages:", error));
  }, [doctorId]);

  // Listen for incoming messages
  useEffect(() => {
    socket.on("receiveMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Cleanup socket listener on unmount
    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  // Handle sending messages
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const messageData = { user, message: newMessage, doctorId }; // Include doctorId
      socket.emit("sendMessage", messageData); // Send message to server
      setNewMessage(""); // Clear input
    }
  };

  // Handle user input
  const handleUserChange = (e) => {
    const name = e.target.value;
    setUser(name);
    localStorage.setItem("user", name); // Store user name in localStorage
  };

  return (
    <div>
      {/* Chat Now Button */}
      <button
        className="fixed bottom-4 right-4 p-4 bg-[#1FA9B1] text-white rounded-full shadow-lg hover:bg-[#0f8c89] focus:outline-none"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        Chat Now
      </button>

      {/* Chat Popup */}
      {isChatOpen && (
        <div
          className="fixed z-50 w-full p-4 bg-white rounded-lg shadow-lg bottom-16 right-4 sm:w-96 h-96"
          style={{ maxWidth: "400px", maxHeight: "500px" }}
        >
          {/* Chat Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">
              Chat with {" "}
              {selectedDoctorName ? selectedDoctorName : "Loading..."}
            </h3>

            <button
              onClick={() => setIsChatOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              X
            </button>
          </div>

          {/* User Name Input */}
          {!user ? (
            <div className="mb-4">
              <input
                type="text"
                value={user}
                onChange={handleUserChange}
                placeholder="Enter your name"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          ) : (
            <div className="mb-4">
              <p className="text-gray-700">Hello, {user}!</p>
            </div>
          )}

          {/* Messages */}
          <div
            className="flex-1 p-2 mb-4 overflow-y-auto"
            style={{ maxHeight: "calc(100% - 140px)" }}
          >
            {messages.map((msg, index) => (
              <div key={index} className="mb-2">
                <strong>{msg.user}: </strong>
                <span>{msg.message}</span>
              </div>
            ))}
          </div>

          {/* Message Input and Send Button */}
          <div className="flex">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 bg-[#1FA9B1] text-white p-2 rounded-md"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
