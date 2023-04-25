import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchText }) => {
  return (
    <div className="w-full flex items-center gap-x-3 p-2 my-5 border bg-slate-400 rounded-xl">
      <MdSearch size="1.3rem" className="" />
      <input
        type="text"
        name=""
        id=""
        placeholder="Search here"
        onChange={(e) => handleSearchText(e.target.value)}
        className="bg-slate-400 border-none focus:outline-none placeholder:text-slate-800"
      />
    </div>
  );
};

export default Search;
