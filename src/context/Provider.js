import React, { createContext, useReducer } from "react";
import initStateDefault from "./initStates/initStateDefault";
import loginReducer from "./reducers/Auth/loginReducers";
import authReducer from "./reducers/Auth/authReducer";
import initStateUser from "./initStates/initStateUser";
import dashboardReducer from "./reducers/Dashboard";
import initStateDashboard from "./initStates/initStateDashboard";
import agamaReducer from "./reducers/MasterData/Agama";
import initStateAgama from "./initStates/initStateAgama";
import statusPegawaiReducer from "./reducers/MasterData/StatusPegawai";
import initStateStatusPegawai from "./reducers/MasterData/StatusPegawai";

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

  // Status Pegawai
  const [statusPegawaiState, statusPegawaiDispatch] = useReducer(
    statusPegawaiReducer,
    initStateStatusPegawai
  );

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
        statusPegawaiState,
        statusPegawaiDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
