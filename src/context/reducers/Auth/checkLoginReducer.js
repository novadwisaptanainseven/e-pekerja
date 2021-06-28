const { LOGIN_SUCCESS } = require("src/context/actionTypes");

const checkLoginReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
      };
    case "LOGOUT":
      return {
        ...state,
        isLogin: false,
      };

    default:
      return state;
  }
};

export default checkLoginReducer;
