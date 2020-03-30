import React from "react";
// Get input from url
import { useRouter } from 'next/router';

import { getMovieById } from "../../actions";


const Movie = (props) => {
    // call instance of router
    const router =  useRouter();
    // This is the file name or slug name, in this case we called it `[id]`
    const { id } = router.query;
    // Store {props} === movie.data
    const { movie } = props;

    // SET in /components/movieList.js
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">{movie.name}</h1>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its
                        parent.</p>
                    <hr className="my-4"/>
                    <p>Fill with some text, blah blah blah .</p>
                    <a className="btn btn-primary btn-lg">? Function</a>
                </div>
            </div>

            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores cupiditate deserunt ducimus ea est et excepturi, facere illo ipsa magni molestiae odio officiis perspiciatis quo, reprehenderit rerum ut voluptates?</p>
            </div>
        </div>
    );
};

Movie.getInitialProps = async () => {
    const movie = await getMovieById('2');

    return { movie };
};

export default Movie;