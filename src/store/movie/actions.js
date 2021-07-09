import {
  GET_MOVIE,
  GET_MOVIES,
  CLEAR_MOVIE,
  CREATE_MOVIE,
  DELETE_MOVIE,
  IMPORT_MOVIES,
} from './types';
import API from 'services/api';
import actionFactory from 'utils/actions/actionFactory';

const getMovie = actionFactory(GET_MOVIE);
const getMovies = actionFactory(GET_MOVIES);
const createMovie = actionFactory(CREATE_MOVIE);
const deleteMovie = actionFactory(DELETE_MOVIE);
const importMovies = actionFactory(IMPORT_MOVIES);
export const clearMovie = actionFactory(CLEAR_MOVIE);

export const getMovieByIdRequest = id => dispatch => {
  API.get(`/movies/${id}`).then(({ data }) => {
    dispatch(getMovie(data));
  });
};

export const getMoviesRequest = params => dispatch => {
  API.get('/movies', params).then(({ data }) => {
    dispatch(getMovies(data));
  });
};

export const createMovieRequest = body => dispatch => {
  API.post('/movies', body).then(({ data }) => {
    dispatch(createMovie(data));
  });
};

export const deleteMovieRequest = (id, movies) => dispatch => {
  API.delete(`/movies/${id}`).then(({ status }) => {
    if (status === 1) {
      const newList = movies.filter(e => e.id !== id);
      dispatch(deleteMovie(newList));
    }
  });
};

export const importMoviesRequest = body => dispatch => {
  API.post('/movies/import', body).then(({ data }) => {
    dispatch(importMovies(data));
  });
};
