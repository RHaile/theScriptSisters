import React, { useState } from "react";

function Favorite() {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <button onClick={handleClick} className="focus:outline-none">
      {isFavorite ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6 text-yellow-500"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.122 6.531a1 1 0 00.95.69h6.854c.96 0 1.365 1.23.588 1.81l-5.515 4.01a1 1 0 00-.364 1.118l2.123 6.531c.3.922-.755 1.688-1.54 1.118L12 19.432l-5.519 4.015c-.785.57-1.84-.196-1.54-1.118l2.123-6.531a1 1 0 00-.364-1.118L1.186 11.96c-.777-.58-.372-1.81.588-1.81h6.854a1 1 0 00.95-.69l2.122-6.532z"
          />
        </svg>
      )}
    </button>
  );
}

export default Favorite;
