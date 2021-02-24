import { createContext } from "react";

export const StaffContext = createContext();

export const StaffContextProvider = (props) => {
  const addNewStaff = (staffInfo) => {
    console.log(staffInfo);
  };

  return (
    <StaffContext.Provider value={{ addNewStaff }}>
      {props.children}
    </StaffContext.Provider>
  );
};
