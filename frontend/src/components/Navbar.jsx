import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <button
          className="btn btn-square btn-ghost"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {isOpen && (
          <div className="dropdown-content mt-2 p-2 shadow bg-base-100 rounded-box w-22">
            <ul className="menu menu-compact">
              <li><a href="/">Home</a></li>
              <li><a href="/login">Login / Signup</a></li>
              <li><a href="/plantsearch">Plant Search</a></li>
              <li><a href="/myplants">Favorite Plants</a></li>
            </ul>
          </div>
        )}
      </div>
      <div className="flex-none"></div>
    </div>
  );
}

export default Navbar;
