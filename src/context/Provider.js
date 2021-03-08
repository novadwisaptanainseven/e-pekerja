import React, { createContext, useReducer } from "react";
import initStateDefault from "./initStates/initStateDefault";
import loginReducer from "./reducers/Auth/loginReducers";
import authReducer from "./reducers/Auth/authReducer";
import initStateUser from "./initStates/initStateUser";
import dashboardReducer from "./reducers/Dashboard";
import initStateDashboard from "./initStates/initStateDashboard";
import agamaReducer from "./reducers/MasterData/Agama";
import initStateAgama from "./initStates/initStateAgama";
import initStateGolongan from "./initStates/initStateGolongan";
import golonganReducer from "./reducers/MasterData/PangkatGolongan";
import MasterDataReducer from "./reducers/MasterData/MasterDataReducer";
import initStateEselon from "./initStates/initStateEselon";
import initStateJabatan from "./initStates/initStateJabatan";
import initState from "./initStates/initState";
import pegawaiReducer from "./reducers/Pegawai/pegawaiReducer";

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

  // Master Data

  // Agama
  const [agamaState, agamaDispatch] = useReducer(agamaReducer, initStateAgama);

  // Pangkat Golongan
  const [golonganState, golonganDispatch] = useReducer(
    golonganReducer,
    initStateGolongan
  );

  // Pangkat Eselon
  const [eselonState, eselonDispatch] = useReducer(
    MasterDataReducer,
    initStateEselon
  );

  // Jabatan
  const [jabatanState, jabatanDispatch] = useReducer(
    MasterDataReducer,
    initStateJabatan
  );

  // Bidang
  const [bidangState, bidangDispatch] = useReducer(
    MasterDataReducer,
    initState
  );

  // Sub Bidang
  const [subBidangState, subBidangDispatch] = useReducer(
    MasterDataReducer,
    initState
  );

  // Pegawai

  // PNS
  const [pnsState, pnsDispatch] = useReducer(pegawaiReducer, initState);

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
        golonganState,
        golonganDispatch,
        eselonState,
        eselonDispatch,
        jabatanState,
        jabatanDispatch,
        bidangState,
        bidangDispatch,
        subBidangState,
        subBidangDispatch,
        pnsState,
        pnsDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
