import React, { createContext, useReducer } from "react";
import initStateDefault from "./initStates/initStateDefault";
import loginReducer from "./reducers/Auth/loginReducers";
import authReducer from "./reducers/Auth/authReducer";
import initStateUser from "./initStates/initStateUser";
import dashboardReducer from "./reducers/Dashboard";
import initStateDashboard from "./initStates/initStateDashboard";
import agamaReducer from "./reducers/MasterData/Agama";
import initStateAgama from "./initStates/initStateAgama";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  // Login
  const [loginState, loginDispatch] = useReducer(
    loginReducer,
    initStateDefault
  );

  // Save Current User
  const [userState, userDispatch] = useReducer(authReducer, initStateUser);

  // Admin Dashboard
  const [dashboardState, dashboardDispatch] = useReducer(
    dashboardReducer,
    initStateDashboard
  );

  // Agama
  const [agamaState, agamaDispatch] = useReducer(agamaReducer, initStateAgama);

  return (
    <GlobalContext.Provider
      value={{
        loginState,
        loginDispatch,
        userState,
        userDispatch,
        dashboardState,
        dashboardDispatch,
        agamaState,
        agamaDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
