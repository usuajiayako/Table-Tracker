import React, { createContext, useState } from "react";

export const OrderContext = createContext();

export const OrderContextProvider = (props) => {
  const [orders] = useState();

  return (
    <OrderContext.Provider value={{ orders }}>
      {props.children}
    </OrderContext.Provider>
  );
};
