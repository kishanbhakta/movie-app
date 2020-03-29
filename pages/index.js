import React, {useState, useEffect} from 'react';
import SideMenu from "../components/sideMenu";
import Carousel from "../components/carousel";
import MovieList from "../components/movieList";

// Import getter methods from ../actions
import { getMovies } from "../actions";

const Home = (props) => {
    return (
        <div>
            {/*BODY*/}
            <div className="home-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            {/*Utilize props by setting someName={propName}*/}
                            <SideMenu
                                appName={"Movie DB"}/>
                        </div>

                        <div className="col-lg-9">
                            <Carousel />
                            <div className="row">
                                {/*{ errorMessage &&*/}
                                {/*    <div className="alert alert-danger">*/}
                                {/*        {errorMessage}*/}
                                {/*    </div>*/}
                                {/*}*/}
                                <MovieList movies={props.movies || []}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

Home.getInitialProps = async () => {
    const movies = await getMovies();
    return {
        movies
    }
};

export default Home;