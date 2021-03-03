import React, { createContext, useReducer } from "react";
import initStateDefault from "./initStates/initStateDefault";
import loginReducer from "./reducers/Auth/loginReducers";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [loginState, loginDispatch] = useReducer(
    loginReducer,
    initStateDefault
  );

  return (
    <GlobalContext.Provider
      value={{
        loginState,
        loginDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
