const {
  AGAMA_LOADING,
  AGAMA_SUCCESS,
  AGAMA_ERROR,
  AGAMA_CLEAN_UP,
} = require("src/context/actionTypes");

const agamaReducer = (state, action) => {
  switch (action.type) {
    case AGAMA_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case AGAMA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case AGAMA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case AGAMA_CLEAN_UP:
      return {
        ...state,
        data: null,
      };

    default:
      return state;
  }
};

export default agamaReducer;
