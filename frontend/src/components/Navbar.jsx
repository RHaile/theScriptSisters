import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';  // Import AuthContext

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);  // State to track dropdown open/close
  const { user, logout } = useContext(AuthContext);  // Access user and logout from context
  const navigate = useNavigate();  // To navigate after logout

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();  // Call logout function from AuthContext
    navigate('/login');  // Redirect to login page after logging out
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>

          {isOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><Link to="/">Home</Link></li>
              {user ? (
                <>
                  <li><Link to="/plantsearch">Plant Search</Link></li>
                  <li><Link to="/myplants">My Plants</Link></li>
                  <li><Link to="/recipes">Recipes</Link></li>
                  <li><Link to="/communitygarden">Community Garden</Link></li>
                  <li><button onClick={handleLogout}>Logout</button></li>
                </>
              ) : (
                <li><Link to="/login">Login / Signup</Link></li>
              )}
            </ul>
          )}
        </div>
      </div>
      <div className="navbar-end">
        {user && <span>Welcome, {user.username}!</span>}
      </div>
    </div>
  );
}

export default Navbar;