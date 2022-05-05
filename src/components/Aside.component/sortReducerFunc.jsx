export const sortReducerFunc = (state, action) => {
  // console.log(state);
  switch (action.type) {
    case "LOW_TO_HIGH":
      return {
        ...state,
        sortBy: action.type,
      };
    case "HIGH_TO_LOW":
      return {
        ...state,
        sortBy: action.type,
      };
  }
};
