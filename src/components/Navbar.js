import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4 w-full">
      {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>
      {/* Links */}
      <ul
        className={`md:flex md:justify-center md:space-x-4 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <a
            href="#accounts"
            className="hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
          >
            Accounts
          </a>
        </li>
        <li>
          <a
            href="#loans"
            className="hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
          >
            Loans
          </a>
        </li>
        <li>
          <a
            href="#investments"
            className="hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
          >
            Investments
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
