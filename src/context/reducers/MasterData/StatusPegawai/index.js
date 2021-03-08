const {
  STATUS_PEGAWAI_LOADING,
  STATUS_PEGAWAI_SUCCESS,
  STATUS_PEGAWAI_ERROR,
  STATUS_PEGAWAI_CLEAN_UP,
} = require("src/context/actionTypes");

const statusPegawaiReducer = (state, action) => {
  switch (action.type) {
    case STATUS_PEGAWAI_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case STATUS_PEGAWAI_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case STATUS_PEGAWAI_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case STATUS_PEGAWAI_CLEAN_UP:
      return {
        ...state,
        data: null,
      };

    default:
      return state;
  }
};

export default statusPegawaiReducer;
