import React from "react";
// Get input from url
import { useRouter } from 'next/router';

import { getMovieById, deleteMovie } from "../../actions";


const Movie = (props) => {
    const router =  useRouter();
    const { id } = router.query;
    const { movie } = props;

    const handleDeleteMovie = (id) => {
        deleteMovie(id).then(() => {
            //Handle delete
            router.push('/')
        })
    };

    // SET in /components/movieList.js
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">{movie.name}</h1>
                    <p className="lead">{ movie.description}</p>
                    <hr className="my-4"/>
                    <p>Genre: { movie.genre }</p>
                    <button className="btn btn-primary btn-lg mr-1">Learn more</button>
                    <button onClick={() => handleDeleteMovie(id)} className="btn btn-danger btn-lg">Delete</button>
                </div>
            </div>

            <div className="container">
                <p className="desc-text">{movie.longDesc}</p>
            </div>
            <style jsx>{`
                .desc-text {
                    font-size: 21px;
                }
            `}</style>


        </div>
    );
};

/*
* Context
*
* - provides a way to pass data through the component tree without having to pass
*   props down manually at every level.
*
* - is designed to share data that can be considered “global” for a tree of React
*   components, such as the current authenticated user, theme, or preferred language.
*
* - Context is primarily used when some data needs to be accessible by many components at different nesting levels.
*   Apply it sparingly because it makes component reuse more difficult.
*
*   If you only want to avoid passing some props through many levels,
*   component composition[https://reactjs.org/docs/composition-vs-inheritance.html]is often a simpler solution than context.
*
*   {query} is the same as const { id } = context.query();
* */

Movie.getInitialProps = async (context) => {
    // { id } : object
    const { id } = context.query;

    const movie = await getMovieById(id);
// or this:
//          Query Context when a query clause is passed to a query parameter

// Movie.getInitialProps = async ({query}) => {
//     const movie = await getMovieById(query.id);

    return { movie };
};


export default Movie;