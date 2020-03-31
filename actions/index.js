import Movie from "../pages/movies/[id]";

const MOVIE_DATA = [
    {
        id: '1',
        name: 'The Shawshank Redemption',
        releaseYear: 1994,
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        rating: 4.8,
        genre: 'drama',
        image: 'https://images.unsplash.com/photo-1547269098-bff6017b750c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        longDesc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores cupiditate deserunt ducimus ea est et excepturi, facere illo ipsa magni molestiae odio officiis perspiciatis quo, reprehenderit rerum ut voluptates?'
    },
    {
        id: '2',
        name: 'The Dark Knight',
        releaseYear: 2008,
        description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        rating: 4.7,
        genre: 'action, crime, drama',
        image: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        longDesc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores cupiditate deserunt ducimus ea est et excepturi, facere illo ipsa magni molestiae odio officiis perspiciatis quo, reprehenderit rerum ut voluptates?'
    },
    {
        id: '3',
        name: 'Lord of the Rings',
        releaseYear: 2004,
        description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
        rating: 4.9,
        genre: 'adventure, drama, fantasy',
        image: 'https://images.unsplash.com/photo-1536972781967-a8aedfb21059?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        longDesc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores cupiditate deserunt ducimus ea est et excepturi, facere illo ipsa magni molestiae odio officiis perspiciatis quo, reprehenderit rerum ut voluptates?'
    }
];

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
    // Promise behaviors
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOVIE_DATA);
            // reject('Cannot fetch data!');
        }, 50);
    });

};

export const getMovieById = (id) => {
    return  new Promise((resolve, reject) => {
        // Find index of `id`
        const movie_index = MOVIE_DATA.findIndex(movie => movie.id === id);
        // Get indexed data
        const movie = MOVIE_DATA[movie_index];
        // capture data
        setTimeout(() => resolve(movie), 50);
    });

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