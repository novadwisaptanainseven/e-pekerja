const {
  LOADING,
  SUCCESS,
  ERROR,
  CLEAN_UP,
} = require("src/context/actionTypes");

const reducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAN_UP:
      return {
        ...state,
        data: "",
      };

    default:
      return state;
  }
};

export default reducer;
