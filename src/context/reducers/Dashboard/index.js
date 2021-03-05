const {
  DASHBOARD_LOADING,
  DASHBOARD_SUCCESS,
  DASHBOARD_ERROR,
  DASHBOARD_CLEAN_UP,
} = require("src/context/actionTypes");

const dashboardReducer = (state, action) => {
  switch (action.type) {
    case DASHBOARD_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case DASHBOARD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case DASHBOARD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DASHBOARD_CLEAN_UP:
      return {
        ...state,
        data: null,
      };

    default:
      return state;
  }
};

export default dashboardReducer;
