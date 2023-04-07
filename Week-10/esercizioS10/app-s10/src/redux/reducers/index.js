const initialState = {
  apiKey: {
    key: "6d56f27708c00f55ad1dc979f774ad05",
  },
  favs: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return {
        ...state,
        favs: {
          content: [...state.favs.content, action.payload],
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
