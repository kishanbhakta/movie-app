import React, {useState, useEffect} from 'react';
import SideMenu from "../components/sideMenu";
import Carousel from "../components/carousel";
import MovieList from "../components/movieList";

// Import getter methods from ../actions
import { getMovies, getCategories } from "../actions";

const Home = (props) => {
    //console.log(JSON.stringify(props.image));
    const { images, categories, movies } = props;

    const changeCategory = category => {
        alert(`Changing to category of : ${category}`)
    }

    return (
        <div>
            {/*BODY*/}
            <div className="home-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            {/*Utilize props by setting someName={propName}*/}
                            <SideMenu
                                changeCategory={changeCategory}
                                categories={categories}
                                appName={"Movie DB"}/>
                        </div>

                        <div className="col-lg-9">
                            <Carousel images={images}/>
                            <div className="row">
                                {/*{ errorMessage &&*/}
                                {/*    <div className="alert alert-danger">*/}
                                {/*        {errorMessage}*/}
                                {/*    </div>*/}
                                {/*}*/}
                                <MovieList movies={movies || []}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

/*
*
* getInitialProps() will be the main method and entry point for the components data
*
* ALL component functions will be executed from this method
*
* */
Home.getInitialProps = async () => {
    //console.log('Calling getInitialProps from home');
    const movies = await getMovies();
    const categories = await getCategories();

    const images = movies.map(movie => ({
            id: `image-${movie.id}`,
            url: movie.image,
            name: movie.name
        })
    );

    return {
        movies,
        images,
        categories
    }
};

export default Home;