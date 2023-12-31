import axios from 'axios';

const BASE_URL = 'https://api.tvmaze.com/shows';
const GET_SHOWS = 'GET_SHOWS';

const initialState = [];

export const fetchShows = (data) => ({
  type: GET_SHOWS,
  payload: data,
});

export const getShowsAction = () => async (dispatch) => {
  try {
    const response = await axios.get(BASE_URL);
    dispatch(fetchShows(response.data));
  } catch (error) {
    console.error('Error fetching shows:', error);
  }
};

const showsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SHOWS:
      return [...action.payload];

    default:
      return state;
  }
};

export default showsReducer;
