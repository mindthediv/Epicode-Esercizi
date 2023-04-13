export const ADD_FAVOURITES = "ADD_FAVOURITES";
export const GET_JOBS = "GET_JOBS";
export const SET_QUERY = "SET_QUERY";

export const addFavs = (paylo) => {
  return {
    type: ADD_FAVOURITES,
    payload: paylo,
  };
};

export const setQuery = (paylo) => {
  return {
    type: SET_QUERY,
    payload: paylo,
  };
};

export const jobsThunk = (query) => {
  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const data = await response.json();
        console.log(data, getState);
        dispatch({
          type: GET_JOBS,
          payload: data.data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
