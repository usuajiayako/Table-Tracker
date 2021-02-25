import React, { createContext } from 'react';

export const OrderContext = createContext();

const sendOrder = (finalisedOrder) => {
  console.log(finalisedOrder);
};

const OrderContextProvider = (props) => {
  return (
    <OrderContext.Provider
      value={{
        sendOrder,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
