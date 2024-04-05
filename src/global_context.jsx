import React, { createContext, useContext, useState } from 'react';
const GlobalStateContext = createContext();
export const GlobalStateProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <GlobalStateContext.Provider value={[cartItems, setCartItems]}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
