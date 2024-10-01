import { createContext, useContext, useReducer } from "react";

import reducer from "./reducers";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const initialState = {
  userData: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    createdAt: "",
    updatedAt: "",
  },
  isAuthenticated: false,
};

export const GlobalContextProvider = ({ children }) => {
  const appState = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={appState}>{children}</GlobalContext.Provider>
  );
};
