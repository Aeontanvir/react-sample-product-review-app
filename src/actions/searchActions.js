import {
    SEARCH_MOVIE,
    FETCH_MOVIES,
    FETCH_MOVIE,
    LOADING
} from './types';
import { APIURL } from '../APIURL';
import axios from 'axios';

export const searchMovie = (text) => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    });
};

export const fetchMovies = (text) => dispatch => {
    axios.get(`${APIURL}s=${text}`).then(resp => {

        dispatch({
            type: FETCH_MOVIES,
            payload: resp.data
        });
    }).catch(err => console.log(err));
}

export const fetchMovie = id => dispatch => {
    axios
        .get(`${APIURL}i=${id}`)
        .then(response =>
            dispatch({
                type: FETCH_MOVIE,
                payload: response.data
            })
        )
        .catch(err => console.log(err));
};

export const setLoading = () => {
    return {
        type: LOADING
    };
};