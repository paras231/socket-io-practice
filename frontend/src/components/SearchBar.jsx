import React from "react";

const SearchBar = ( props ) => {
   
  return (
    <>
      <div className="relative max-w-xs px-4 text-base">
        <div className="label-button flex items-center gap-1 px-2 border rounded-lg shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Type to search"
            className="w-full px-2 py-2 text-gray-500 bg-transparent rounded-md outline-none"
            // value={searchFieldVal}
            // onChange={handleSearch}
            // onFocus={() => setState(true)}
          />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
