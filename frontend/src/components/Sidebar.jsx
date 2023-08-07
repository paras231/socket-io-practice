import React from "react";
import Drawer from "react-modern-drawer";
import SearchBar from "./SearchBar";
import { MdMenuOpen } from "react-icons/md";
const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleSearch = () => {};

  return (
    <>
      <button
        onClick={toggleDrawer}
        className="w-[10vw]  px-5 py-3 mt-10 ml-5 text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg"
      >
        Search Users
      </button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="bla bla bla"
      >
        <div className="text-center text-gray-500 mt-10 text-lg">
          Search Users
        </div>
        <div className="mt-10">
          <SearchBar handleSearch={handleSearch} />
        </div>
      </Drawer>
    </>
  );
};

export default Sidebar;
