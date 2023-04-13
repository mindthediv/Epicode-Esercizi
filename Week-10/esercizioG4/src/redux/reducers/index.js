import { combineReducers } from "@reduxjs/toolkit";
import { ADD_FAVOURITES, GET_JOBS, SET_QUERY } from "../actions";

const favsState = {
  //Slices
  favourites: {
    content: [],
  },
};

const jobsState = {
  jobs: {
    query: "",
    content: [],
  },
};

const favsReducer = (state = favsState, action) => {
  switch (action.type) {
    case ADD_FAVOURITES:
      if (!state.favourites.content.includes(action.payload)) {
        return {
          favourites: {
            content: [...state.favourites.content, action.payload],
          },
        };
      } else {
        console.log("già presente");
      }
    case "REMOVE_FAVOURITES":
      return {
        favourites: {
          content: state.favourites.content.filter(
            (book, i) => i !== action.payload
          ),
        },
      };

    default:
      return state;
  }
};

const jobsReducer = (state = jobsState, action) => {
  switch (action.type) {
    case SET_QUERY:
      return {
        jobs: {
          ...state.jobs,
          query: action.payload,
        },
      };
    case GET_JOBS:
      return {
        jobs: {
          ...state.jobs,
          content: action.payload,
        },
      };

    default:
      return state;
  }
};

const mainReducer = combineReducers({
  favourites: favsReducer,
  jobs: jobsReducer,
});

export default mainReducer;
