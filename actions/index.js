import Movie from "../pages/movies/[id]";
import axios from 'axios';

const BASE_URL = 'http://localhost:3000'

const MOVIE_DATA = []


const CATEGORY_DATA = [
    {id: 'c-1', name: 'drama'},
    {id: 'c-2', name: 'action'},
    {id: 'c-3', name: 'adventure'},
    {id: 'c-4', name: 'historical'}
];


export const getCategories = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(CATEGORY_DATA);
        }, 50);
    });
};

export const getMovies = () => {
    return axios.get(`${BASE_URL}/api/v1/movies`).then(res => res.data)
};

export const getMovieById = (id) => {
    return axios.get(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data)
};


export const createMovie = (movie) => {
    return  new Promise((resolve, reject) => {
        // Create ID for movie toString(base36) cut `0.` from index 2 and set length to 7
        movie.id = Math.random().toString(36).substr(2, 7);
        MOVIE_DATA.push(movie);
        setTimeout(() => {
            resolve(MOVIE_DATA);
            // reject('Cannot fetch data!');
        }, 50);
    });

};