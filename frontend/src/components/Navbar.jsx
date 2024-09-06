import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to track dropdown open/close

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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
              <li><a href="/">Home</a></li>
              <li><a href="/login">Login / Signup</a></li>
              <li><a href="/plantsearch">Plant Search</a></li>
              <li><a href="/myplants">My Plants</a></li>
              <li><a href="/recipes">Recipes</a></li>
              <li><a href="/communitygarden">Community Garden</a></li>

            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
