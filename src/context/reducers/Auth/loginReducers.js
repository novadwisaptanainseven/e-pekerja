const {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_CLEAN_UP,
} = require("src/context/actionTypes");

const loginReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOGIN_CLEAN_UP:
      return {
        ...state,
        data: null,
      };

    default:
      return state;
  }
};

export default loginReducer;
