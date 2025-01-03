
function handleLogin(e,users,email,password,setError,navigate) {
    e.preventDefault();

    // Check for email and password match
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      if (user.role === "admin") {
        navigate("/admin-dashboard"); // Redirect to Admin page
      } else if (user.role === "soldier") {
        navigate("/soldier"); // Redirect to Soldier page
      }
    } else {
      setError("Invalid email or password. Please try again!"); // Show error message
    }
  };
  export default handleLogin;