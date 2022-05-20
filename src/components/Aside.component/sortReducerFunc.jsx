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

    case "DISCOUNT":
      return {
        ...state,
        discount: parseInt(action.value),
      };

    case "BESTSELLER":
      return {
        ...state,
        categories: {
          ...state["categories"],
          bestseller: !state.categories.bestseller,
        },
      };

    case "FICTION":
      return {
        ...state,
        categories: {
          ...state["categories"],
          fiction: !state.categories.fiction,
        },
      };

    case "NONFICTION":
      return {
        ...state,
        categories: {
          ...state["categories"],
          nonfiction: !state.categories.nonfiction,
        },
      };

    case "HORROR":
      return {
        ...state,
        categories: {
          ...state["categories"],
          horror: !state.categories.horror,
        },
      };
    case "CLEAR":
      return {
        sortBy: "",
        categories: {
          bestseller: false,
          fiction: false,
          nonfiction: false,
          horror: false,
        },
        discount: "",
      };
  }
};
