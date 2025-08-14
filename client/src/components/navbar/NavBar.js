import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import "./navbarStyle.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const logout = useLogout();

  const handleLogout = () => {
    logout();
  };

  const { user } = useAuthContext();
  return (
    <nav>
      <Link to="/">WorkoutBuddy</Link>

      {user ? (
        <div className="logout">
          <span>{user.email}</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="auth">
          <NavLink to="/signup">Sign Up</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
