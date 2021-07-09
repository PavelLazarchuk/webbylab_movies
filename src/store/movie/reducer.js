import {
  GET_MOVIE,
  GET_MOVIES,
  CLEAR_MOVIE,
  CREATE_MOVIE,
  DELETE_MOVIE,
  IMPORT_MOVIES,
} from './types';

const initialState = {
  movies: [],
  movie: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case CLEAR_MOVIE:
      return {
        ...state,
        movie: null,
      };

    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload,
      };

    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };

    case CREATE_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };

    case IMPORT_MOVIES:
      return {
        ...state,
        movies: [...state.movies, ...action.payload],
      };

    case DELETE_MOVIE:
      return {
        ...state,
        movies: action.payload,
      };

    default:
      return state;
  }
}
