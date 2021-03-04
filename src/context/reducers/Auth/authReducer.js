const authReducer = (state, action) => {
  switch (action.type) {
    case "SAVE_USER":
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
