
import { useLocation, useNavigate } from "react-router-dom";

function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();

  const user = location.state?.user;

  return (
    <div>
      <h1>Welcome to Dashboard!</h1>
      <h2>Welcome, {user ? user.name : "Guest"}!</h2>

      {user ? (
        <p>Email: {user.email}</p>
      ) : (
        <p>No user data received. Please login again.</p>
      )}

      <button onClick={() => navigate("/")}>Logout</button>
    </div>
  );
}

export default dashboard;




