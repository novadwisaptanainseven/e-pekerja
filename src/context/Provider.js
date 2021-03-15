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
import initStateGolongan from "./initStates/initStateGolongan";
import golonganReducer from "./reducers/MasterData/PangkatGolongan";
import MasterDataReducer from "./reducers/MasterData/MasterDataReducer";
import initStateEselon from "./initStates/initStateEselon";
import initStateJabatan from "./initStates/initStateJabatan";
import initState from "./initStates/initState";
import pegawaiReducer from "./reducers/Pegawai/pegawaiReducer";
import pensiunReducer from "./reducers/Pensiun/pensiunReducer";
import initStatePensiun from "./initStates/initStatePensiun";
import penghargaanReducer from "./reducers/Penghargaan";
import initStatePenghargaan from "./initStates/initStatePenghargaan";

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

  // Status Pegawai
  const [statusPegawaiState, statusPegawaiDispatch] = useReducer(
    statusPegawaiReducer,
    initStateStatusPegawai
  );
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

  // PTTH
  const [ptthState, ptthDispatch] = useReducer(pegawaiReducer, initState);

  // Pensiun
  const [pensiunState, pensiunDispatch] = useReducer(
    pensiunReducer,
    initStatePensiun
  );

  // Penghargaan
  const [penghargaanState, penghargaanDispatch] = useReducer(
    penghargaanReducer,
    initStatePenghargaan
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
        ptthState,
        ptthDispatch,
        pensiunState,
        pensiunDispatch,
        penghargaanState,
        penghargaanDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
