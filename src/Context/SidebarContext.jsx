import React, { createContext, useState } from "react";
// created a context for sidebar related states
export const SidebarContext = createContext();
// define the sidebar providor components
const SidebarProvidor = ({ children }) => {
// intialize the state to manage sidebar open/close status
  const [isOpen, setIsOpen] = useState(false);
// function to handle closing the sidebar
  const handleClose = () => {
    setIsOpen(false);
  };

// provide the sidebar state and functions to child components
  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};
// export the sidebarprovider component as the default export
export default SidebarProvidor;
