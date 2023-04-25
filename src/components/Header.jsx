import React from "react";

const Header = ({ handleToggleMode, darkToggleMode }) => {
  return (
    <div className="flex justify-between items-center">
      <h1
        className={`${
          darkToggleMode
            ? "text-white text-5xl font-bold"
            : "text-black text-5xl font-bold"
        }`}
      >
        Notes
      </h1>
      <button
        onClick={() => handleToggleMode((previous) => !previous)}
        className="bg-gray-200 border-none rounded-full py-1 px-3 hover:bg-gray-400 cursor-pointer"
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
