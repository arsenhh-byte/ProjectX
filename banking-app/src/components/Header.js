import React from "react";
import NavBar from "./NavBar"; // Assuming NavBar is appropriate for a banking app

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <h1 className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="ml-3 text-xl font-bold">My Bank</span> {/* Updated Brand Name */}
        </h1>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
