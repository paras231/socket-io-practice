import React from "react";
import Drawer from "react-modern-drawer";

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <button onClick={toggleDrawer}>Show</button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="bla bla bla"
      >
        <div>Hello World</div>
      </Drawer>
    </>
  );
};

export default Sidebar;
